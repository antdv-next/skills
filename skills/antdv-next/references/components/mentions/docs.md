---
title: Mentions
subtitle: 提及
description: 用于在输入中提及某人或某事。
---

## 何时使用 
用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## Demos

| Demo | Path |
| --- | --- |
| 基本使用 | demo/basic.md |
| 尺寸 | demo/size.md |
| 形态变体 | demo/variant.md |
| 异步加载 | demo/async.md |
| 配合 Form 使用 | demo/form.md |
| 自定义触发字符 | demo/prefix.md |
| 无效或只读 | demo/readonly.md |
| 向上展开 | demo/placement.md |
| 带移除图标 | demo/allow-clear.md |
| 自动大小 | demo/auto-size.md |
| 自定义状态 | demo/status.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| loading | - | boolean | - | - |
| status | 设置校验状态 | InputStatus | - | - |
| options | 选项配置 | MentionsOptionProps[] | [] | - |
| popupClassName | - | string | - | - |
| variant | 形态变体 | Variant | `outlined` | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | MentionsClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | MentionsStylesType | - | - |
| size | - | SizeType | - | - |
| labelRender | - | (ctx: &#123; option: MentionsOptionProps, index: number &#125;) =&gt; any | - | - |
| allowClear | 可以点击清除图标删除内容 | boolean \| &#123;     clearIcon?: VueNode   &#125; | false | - |
| disabled | - | boolean | - | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| focus | 获得焦点时触发 | (event: FocusEvent) =&gt; void | - |
| blur | 失去焦点时触发 | (event: FocusEvent) =&gt; void | - |
| change | 值改变时触发 | (value: string) =&gt; void | - |
| select | 选择选项时触发 | (option: MentionsOptionProps, prefix: string) =&gt; void | - |
| popupScroll | 滚动时触发 | (event: Event) =&gt; void | - |
| search | 搜索时触发 | (text: string, prefix: string) =&gt; void | - |
| update:value | - | (value: string) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| suffix | - | () =&gt; any | - |
| labelRender | - | (ctx: &#123; option: MentionsOptionProps, index: number &#125;) =&gt; any | - |
