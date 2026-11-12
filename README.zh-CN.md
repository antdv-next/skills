# Antdv Next Skills


面向 Antdv Next 组件库开发的 Agent 技能集。

> 🚧 **早期实验 / 社区项目**
>
> 该仓库是一个早期实验，旨在为 AI Agent 提供面向 Antdv Next 的专用技能。技能由 Antdv Next playground 的文档与示例生成。欢迎反馈，帮助我们提升覆盖范围与准确性。

## 安装

```bash
npx skills add antdv-next/skills


# 更新 skills
npx skills update antdv-next
```

## 使用

为了获得最稳定的效果，建议在提示词前加上 `use antdv-next skill`：

```
Use antdv-next skill, <你的需求>
```

这样可以显式触发技能；否则可能因匹配度不足导致触发不稳定。

## 可用技能

| Skill | 适用场景 | 说明 |
|-------|----------|------|
| **antdv-next** | Antdv Next 组件 | 组件的属性/事件/插槽与 playground 示例用法 |
| **antdv-next-mobile** | Antdv Next Mobile（`@antdv-next/mobile`）组件 | `am-*` 组件的属性/事件/插槽、示例、CSS 变量主题，以及与 PC 端的差异 |

## 语言

生成脚本支持单语言输出，以减少 references 体积：

```bash
pnpm run generate:en          # antdv-next
pnpm run generate:zh
pnpm run generate:mobile      # antdv-next-mobile
pnpm run generate:mobile:zh
```

## 自动同步

`.github/workflows/sync.yml` 会让技能跟随上游发版自动更新。每 6 小时（或手动触发）运行一次 `scripts/sync.ts`：查询 `antdv-next/antdv-next`（`antdv-next@x.y.z`）和 `antdv-next/antdv-next-mobile`（`@antdv-next/mobile@x.y.z`）最新的正式版 tag；如果 `repos/` 下的子模块还不包含该版本，就把子模块切到这个 tag，重新生成英文技能并提交到 `main`。

```bash
pnpm run sync:check   # 只报告会更新什么
pnpm run sync         # 在本地更新子模块并重新生成
```

## 方法

技能基于 Antdv Next playground 文档与示例构建。生成器会将示例转为 markdown，并把文档复制到 `references/` 中，确保离线可用且不依赖外部链接。

## License

MIT
