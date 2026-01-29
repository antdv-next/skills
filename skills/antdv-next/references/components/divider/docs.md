---
title: Divider
subtitle: 分割线
description: 区隔内容的分割线。
---

## 何时使用 
- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## Demos

| Demo | Path |
| --- | --- |
| 水平分割线 | demo/horizontal.md |
| 带文字的分割线 | demo/with-text.md |
| 垂直分割线 | demo/vertical.md |
| 分割文字使用正文样式 | demo/plain.md |
| 变体 | demo/variant.md |
| 设置分割线的间距大小 | demo/size.md |
| 样式自定义 | demo/customize-style.md |
| 自定义语义结构的样式和类 | demo/style-calss.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否虚线 | boolean | false |
| orientation | 水平或垂直类型 | `horizontal` \| `vertical` | `horizontal` |
| plain | 文字是否显示为普通正文样式 | boolean | false |
| size | 间距大小，仅对水平布局有效 | `small` \| `middle` \| `large` | - |
| titlePlacement | 分割线标题的位置 | `start` \| `end` \| `center` | `center` |
| variant | 分割线是虚线、点线还是实线 | `dashed` \| `dotted` \| `solid` | `solid` |
| vertical | 是否垂直，和 orientation 同时配置以 orientation 优先 | boolean | false |

## 语义化 DOM 结构 
容器元素及其各个子元素的类名和 style。

| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| content | 内容元素（标题） |
| rail | 分割线元素 |
