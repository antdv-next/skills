import { execFileSync } from 'node:child_process'
import { appendFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * Keeps the skills in step with upstream releases.
 *
 * For every target: find the newest stable release tag of the upstream repository, and when the
 * submodule does not contain that release yet, move the submodule to the tag and regenerate the skill.
 * A submodule that is already at (or past) the newest release is left alone, so a run never goes backwards.
 *
 *   esno scripts/sync.ts                      # sync every skill
 *   esno scripts/sync.ts --only antdv-next-mobile
 *   esno scripts/sync.ts --check              # report only, change nothing
 *   esno scripts/sync.ts --force              # regenerate from the newest release even when up to date
 *
 * Used by .github/workflows/sync.yml, which commits whatever this leaves in the working tree.
 */

type Target = {
  /** Folder under `skills/`. */
  skill: string
  /** Name used in the commit message. */
  label: string
  submodule: string
  /** Release tags look like `<tagPrefix>1.2.3`. */
  tagPrefix: string
  generator: string
}

const targets: Target[] = [
  {
    skill: 'antdv-next',
    label: 'antdv-next',
    submodule: 'repos/antdv-next',
    tagPrefix: 'antdv-next@',
    generator: 'scripts/generate-antdv-next-skill.ts',
  },
  {
    skill: 'antdv-next-mobile',
    label: '@antdv-next/mobile',
    submodule: 'repos/antdv-next-mobile',
    tagPrefix: '@antdv-next/mobile@',
    generator: 'scripts/generate-antdv-next-mobile-skill.ts',
  },
]

const root = process.cwd()
const argv = process.argv.slice(2)
const check = argv.includes('--check')
const force = argv.includes('--force')
const onlyIndex = argv.indexOf('--only')
const only = onlyIndex >= 0 ? argv[onlyIndex + 1] : undefined

function git(cwd: string, args: string[]): string {
  return execFileSync('git', args, { cwd, stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim()
}

function gitOk(cwd: string, args: string[]): boolean {
  try {
    execFileSync('git', args, { cwd, stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

/** Newest `x.y.z` tag; prereleases (`1.0.0-rc.1`) are ignored. */
function latestRelease(cwd: string, tagPrefix: string): { tag: string; version: string } | null {
  const versions = git(cwd, ['tag', '--list', `${tagPrefix}*`])
    .split('\n')
    .map((tag) => tag.slice(tagPrefix.length))
    .filter((version) => /^\d+\.\d+\.\d+$/.test(version))
    .sort((a, b) => {
      const pa = a.split('.').map(Number)
      const pb = b.split('.').map(Number)
      return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2]
    })
  const version = versions.at(-1)
  return version ? { tag: `${tagPrefix}${version}`, version } : null
}

function syncTarget(target: Target): string | null {
  const cwd = path.join(root, target.submodule)
  if (!existsSync(path.join(cwd, '.git'))) {
    throw new Error(`${target.submodule} is not initialised, run: git submodule update --init`)
  }

  // the ancestor check below needs history, a shallow clone would make every release look new
  const shallow = git(cwd, ['rev-parse', '--is-shallow-repository']) === 'true'
  // tags only: stale branch refs of a long-lived local clone must not break the fetch
  git(cwd, ['fetch', '--force', '--quiet', ...(shallow ? ['--unshallow'] : []), 'origin', 'refs/tags/*:refs/tags/*'])

  const release = latestRelease(cwd, target.tagPrefix)
  if (!release) {
    console.log(`[${target.skill}] no release tag matching ${target.tagPrefix}x.y.z`)
    return null
  }

  const releaseSha = git(cwd, ['rev-parse', `refs/tags/${release.tag}^{commit}`])
  const head = git(cwd, ['rev-parse', 'HEAD'])
  const upToDate = gitOk(cwd, ['merge-base', '--is-ancestor', releaseSha, head])

  if (upToDate && !force) {
    console.log(`[${target.skill}] up to date: ${head.slice(0, 8)} already contains ${release.tag}`)
    return null
  }

  console.log(`[${target.skill}] ${head.slice(0, 8)} -> ${release.tag} (${releaseSha.slice(0, 8)})`)
  if (check) return null

  git(cwd, ['checkout', '--quiet', '--detach', releaseSha])
  execFileSync(
    path.join(root, 'node_modules', '.bin', 'esno'),
    [target.generator, '--repo', target.submodule, '--lang', 'en'],
    { cwd: root, stdio: 'inherit' },
  )
  if (!existsSync(path.join(root, 'skills', target.skill, 'SKILL.md'))) {
    throw new Error(`[${target.skill}] the generator did not produce SKILL.md`)
  }
  return `${target.label} ${release.version} (${releaseSha.slice(0, 8)})`
}

const selected = targets.filter((target) => !only || only === 'all' || target.skill === only)
if (selected.length === 0) {
  console.error(`Unknown skill "${only}". Known: ${targets.map((target) => target.skill).join(', ')}`)
  process.exit(1)
}

const updated = selected.map(syncTarget).filter((item): item is string => item !== null)
const message = updated.length ? `chore: update skills to ${updated.join(', ')}` : ''
console.log(message || (check ? 'Check finished.' : 'Nothing to update.'))

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `message=${message}\n`)
}
