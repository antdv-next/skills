# Antdv Next Skills


面向 Antdv Next 组件库开发的 Agent 技能集。

> 🚧 **早期实验 / 社区项目**
>
> 该仓库是一个早期实验，旨在为 AI Agent 提供面向 Antdv Next 的专用技能。技能由 Antdv Next playground 的文档与示例生成。欢迎反馈，帮助我们提升覆盖范围与准确性。

## 安装

```bash
npx skills add antdv-next/skills


# 更新 skills
npx skills update antdv-next/skills
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

## 语言

生成脚本支持单语言输出，以减少 references 体积：

```bash
pnpm run generate:en
pnpm run generate:zh
```

## 方法

技能基于 Antdv Next playground 文档与示例构建。生成器会将示例转为 markdown，并把文档复制到 `references/` 中，确保离线可用且不依赖外部链接。

## License

MIT
