---
title: Tag
subtitle: 标签
description: 进行标记和分类的小标签。
---

## 何时使用 
- 用于标记事物的属性和维度。
- 进行分类。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 多彩标签 | demo/colorful.md |
| 动态添加和删除 | demo/control.md |
| 可选择标签 | demo/checkable.md |
| 图标按钮 | demo/icon.md |
| 预设状态的标签 | demo/status.md |
| 自定义关闭按钮 | demo/customize.md |
| 禁用标签 | demo/disabled.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Tag

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | false | - |
| closeIcon | 自定义关闭按钮。设置为 `null` 或 `false` 时隐藏关闭按钮 | VueNode | - | 4.4.0 |
| color | 标签色 | string | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TagClassNamesType | - | - |
| disabled | 是否禁用标签 | boolean | false | 6.0.0 |
| href | 点击跳转的地址，指定此属性 tag 组件会渲染成 `<a>` 标签 | string | - | 6.0.0 |
| icon | 设置图标 | VueNode | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TagStylesType | - | - |
| target | 相当于 `<a>` 标签的 target 属性，href 存在时生效 | string | - | 6.0.0 |
| variant | 标签变体 | `filled` \| `solid` \| `outlined` | `filled` | 6.0.0 |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| close | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: MouseEvent) =&gt; void | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。设置为 `null` 或 `false` 时隐藏关闭按钮 | () =&gt; VueNode | 4.4.0 |
| icon | 设置图标 | () =&gt; VueNode | - |

### TagCheckableTag

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checked | 设置标签的选中状态。该组件为完全受控组件 | boolean | false | - |
| icon | 设置图标 | VueNode | - | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 点击标签时触发的回调 | (checked: boolean) =&gt; void | - |

### TagCheckableTagGroup

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record&lt;SemanticDOM, string&gt; | - | - |
| defaultValue | 初始选中值 | string \| number \| Array&lt;string \| number&gt; \| null | - | - |
| disabled | 禁用选中 | boolean | false | - |
| multiple | 多选模式 | boolean | false | - |
| options | 选项列表 | Array&lt;&#123; label: VueNode; value: string \| number &#125; \| string \| number&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record&lt;SemanticDOM, CSSProperties&gt; | - | - |
| value | 选中值，支持 `v-model:value` | string \| number \| Array&lt;string \| number&gt; \| null | - | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 点击标签时触发的回调 | (value: string \| number \| Array&lt;string \| number&gt; \| null) =&gt; void | - |

## 语义化 DOM 
| _semantic | demo/_semantic.md |
