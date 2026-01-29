---
title: Space
subtitle: 间距
description: 设置组件之间的间距。
---

## 何时使用

- 避免组件紧贴在一起，设置统一的间距。
- 当子表单组件紧密连接并且边框折叠时，使用 Space.Compact。

### 与 Flex 组件的区别

- Space 用于设置内联元素之间的间距。它会为每个子元素添加一个包装元素进行内联对齐。适用于多个子元素在行列中的等距排列。
- Flex 用于设置块级元素的布局。它不会添加包装元素。适用于子元素在垂直或水平方向的布局，并提供更多的灵活性和控制。

## Demos

| Demo | Path |
| --- | --- |
| 基本用法 | demo/basic.md |
| 垂直间距 | demo/vertical.md |
| 间距大小 | demo/size.md |
| 对齐方式 | demo/align.md |
| 自动换行 | demo/wrap.md |
| 分隔符 | demo/separator.md |
| 紧凑布局组合 | demo/compact.md |
| Button 紧凑布局 | demo/compact-buttons.md |
| 垂直方向紧凑布局 | demo/compact-button-vertical.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Space

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | - | 4.2.0 |
| orientation | 间距方向 | `vertical` \| `horizontal` | `horizontal` | - |
| separator | 设置分隔符 | VueNode | - | - |
| size | 间距大小 | [Size](#size) \| [[Size](#size), [Size](#size)] | `small` | 4.1.0 \| Array: 4.9.0 |
| vertical | 是否垂直，和 `orientation` 同时配置以 `orientation` 优先 | boolean | false | - |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| separator | 设置分隔符 | () =&gt; VueNode | - |

### Size

`'small' | 'middle' | 'large' | number`

### SpaceCompact

当子表单组件紧密连接并且边框折叠时，使用 Space.Compact。支持的组件有：

- Button
- AutoComplete
- Cascader
- DatePicker
- Input/Input.Search
- InputNumber
- Select
- TimePicker
- TreeSelect

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 4.24.0 |
| orientation | 设置布局方向 | `vertical` \| `horizontal` | `horizontal` | - |
| size | 设置子组件大小 | `large` \| `middle` \| `small` | `middle` | 4.24.0 |
| vertical | 是否垂直，和 `orientation` 同时配置以 `orientation` 优先 | boolean | false | - |

## Semantic DOM
