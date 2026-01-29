---
title: Flex
subtitle: 弹性布局
description: 用于对齐的弹性布局容器。
---

## 何时使用 
- 适合设置元素之间的间距。
- 适合设置各种水平、垂直对齐方式。

### 与 Space 组件的区别 
- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## Demos

| Demo | Path |
| --- | --- |
| 基本布局 | demo/basic.md |
| 对齐方式 | demo/align.md |
| 设置间隙 | demo/gap.md |
| 自动换行 | demo/wrap.md |
| 组合使用 | demo/combination.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` | - |
| wrap | 设置元素单行显示还是多行显示 | boolean \| CSSProperties['flexWrap'] | nowrap | boolean: 5.17.0 |
| justify | 设置元素在主轴方向上的对齐方式 | CSSProperties['justifyContent'] | normal | - |
| align | 设置元素在交叉轴方向上的对齐方式 | CSSProperties['alignItems'] | normal | - |
| flex | flex CSS 简写属性 | CSSProperties['flex'] | normal | - |
| gap | 设置网格之间的间隙 | CSSProperties['gap'] \| SizeType | - | - |
| component | 自定义元素类型 | any | `div` | - |
