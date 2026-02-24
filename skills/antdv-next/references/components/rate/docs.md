---
title: Rate
subtitle: 评分
description: 用于对事物进行评分操作。
---

## 何时使用 
- 对评价进行展示。
- 对事物进行快速的评级操作。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 半星 | demo/half.md |
| 文案展现 | demo/text.md |
| 只读 | demo/disabled.md |
| 清除 | demo/clear.md |
| 其他字符 | demo/character.md |
| 自定义字符 | demo/character-function.md |
| 其它尺寸 | demo/size.md |
| 组件 Token | demo/component-token.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |  |
| allowHalf | 是否允许半选 | boolean | false |  |
| character | 自定义字符 | VueNode \| (RateProps) => VueNode | &lt;StarFilled /> | - |
| className | 自定义样式类名 | string | - |  |
| count | star 总数 | number | 5 |  |
| defaultValue | 默认值 | number | 0 |  |
| disabled | 只读，无法进行交互 | boolean | false |  |
| keyboard | 支持使用键盘操作 | boolean | true | - |
| size | 星星尺寸 | 'small' \| 'middle' \| 'large' | 'middle' |  |
| style | 自定义样式对象 | CSSProperties | - |  |
| tooltips | 自定义每项的提示信息 | [TooltipProps](../tooltip/docs.md#api)[\] \| string\[] | - |  |
| value | 当前数，受控值，支持 `v-model:value` | number | - |  |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 选择时的回调 | (value: number) =&gt; void | - |
| hoverChange | 鼠标经过时数值变化的回调 | (value: number) =&gt; void | - |
| focus | 获取焦点时的回调 | () =&gt; void | - |
| blur | 失去焦点时的回调 | () =&gt; void | - |
| keydown | 按键回调 | (e: KeyboardEvent) =&gt; void | - |
| mouseleave | 鼠标离开时的回调 | (e: FocusEvent) =&gt; void | - |

### 方法 
| 名称    | 说明         |
| ------- | ------------ |
| blur()  | 移除焦点     |
| focus() | 获取焦点     |
