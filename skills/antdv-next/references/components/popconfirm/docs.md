---
title: Popconfirm
subtitle: 气泡确认框
description: 点击元素，弹出气泡式的确认框。
---

## 何时使用 
目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 国际化 | demo/locale.md |
| 位置 | demo/placement.md |
| 贴边偏移 | demo/shift.md |
| 条件触发 | demo/dynamic-trigger.md |
| 自定义 Icon 图标 | demo/icon.md |
| 异步关闭 | demo/async.md |
| 基于 Promise 的异步关闭 | demo/promise.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| cancelButtonProps | cancel 按钮 props | ButtonProps | - | - |
| cancelText | 取消按钮文字 | VueNode | `取消` | - |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false | - |
| icon | 自定义弹出气泡 Icon 图标 | VueNode | &lt;ExclamationCircleFilled /&gt; | - |
| okButtonProps | ok 按钮 props | ButtonProps | - | - |
| okText | 确认按钮文字 | VueNode | `确定` | - |
| okType | 确认按钮类型 | LegacyButtonType | `primary` | - |
| showCancel | 是否显示取消按钮 | boolean | true | - |
| title | 确认框标题 | VueNode | - | - |
| description | 确认内容的详细描述 | VueNode | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | PopconfirmClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | PopconfirmStylesType | - | - |

Popconfirm 还支持 Popover 的所有属性，详见 [Popover](../popover/docs.md#api)。

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 显隐变化时回调 | (open: boolean, e?: MouseEvent \| KeyboardEvent) =&gt; void | - |
| confirm | 点击确认的回调 | (e?: MouseEvent) =&gt; void | - |
| cancel | 点击取消的回调 | (e?: MouseEvent) =&gt; void | - |
| popupClick | 弹出气泡点击事件 | (e: MouseEvent) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 确认框标题 | () =&gt; any | - |
| description | 确认内容的详细描述 | () =&gt; any | - |
| icon | 自定义弹出气泡 Icon 图标 | () =&gt; any | - |
| okText | 确认按钮文字 | () =&gt; any | - |
| cancelText | 取消按钮文字 | () =&gt; any | - |

## Semantic DOM 
| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| container | 弹出内容容器 |
| arrow | 箭头元素 |
| title | 标题元素 |
| content | 描述元素 |

## FAQ

更多问题，请参考 [Tooltip FAQ](../tooltip/docs.md#faq)。
