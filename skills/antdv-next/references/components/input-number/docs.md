---
title: InputNumber
subtitle: 数字输入框
description: 通过鼠标或键盘，输入范围内的数值。
---

## 何时使用 
当需要获取标准数值时。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 三种大小 | demo/size.md |
| 不可用 | demo/disabled.md |
| 高精度小数 | demo/digit.md |
| 格式化展示 | demo/formatter.md |
| 键盘行为 | demo/keyboard.md |
| 鼠标滚轮 | demo/change-on-wheel.md |
| 形态变体 | demo/variant.md |
| 拨轮 | demo/spinner.md |
| 超出边界 | demo/out-of-range.md |
| 前缀/后缀 | demo/presuffix.md |
| 自定义状态 | demo/status.md |
| 聚焦 | demo/focus.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| size | 输入框大小 | SizeType | - | - |
| status | 设置校验状态 | InputStatus | - | - |
| disabled | 禁用 | boolean | false | - |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | VueNode | - | - |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | VueNode | - | - |
| prefix | 带有前缀图标的 input | VueNode | - | - |
| suffix | 带有后缀图标的 input | VueNode | - | - |
| bordered | Deprecated. | boolean | - | - |
| variant | 形态变体 | Variant | `outlined` | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | InputNumberClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | InputNumberStylesType | - | - |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| &#123; upIcon?: VueNode, downIcon?: VueNode &#125; | - | - |
| type | - | 'number' \| 'text' | - | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化回调 | (value: any) =&gt; void | - |
| update:value | - | (value: any) =&gt; void | - |
| input | - | (text: string) =&gt; void | - |
| pressEnter | 按下回车的回调 | (e: KeyboardEvent) =&gt; void | - |
| step | 每次改变步数，可以为小数 | (value: any, info: InputNumberStepContext) =&gt; void | - |
| mousedown | - | (e: MouseEvent) =&gt; void | - |
| click | - | (e: MouseEvent) =&gt; void | - |
| mouseup | - | (e: MouseEvent) =&gt; void | - |
| mouseleave | - | (e: MouseEvent) =&gt; void | - |
| mousemove | - | (e: MouseEvent) =&gt; void | - |
| mouseenter | - | (e: MouseEvent) =&gt; void | - |
| mouseout | - | (e: MouseEvent) =&gt; void | - |
| focus | - | (e: FocusEvent) =&gt; void | - |
| blur | - | (e: FocusEvent) =&gt; void | - |
| keydown | - | (e: KeyboardEvent) =&gt; void | - |
| keyup | - | (e: KeyboardEvent) =&gt; void | - |
| compositionstart | - | (e: CompositionEvent) =&gt; void | - |
| compositionend | - | (e: CompositionEvent) =&gt; void | - |
| beforeinput | - | (e: InputEvent) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| prefix | 带有前缀图标的 input | () =&gt; any | - |
| suffix | 带有后缀图标的 input | () =&gt; any | - |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | () =&gt; any | - |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | () =&gt; any | - |
