---
title: Popover
subtitle: 气泡卡片
description: 点击/鼠标移入元素，弹出气泡式的卡片浮层。
---

## 何时使用 
当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 三种触发方式 | demo/trigger-type.md |
| 位置 | demo/placement.md |
| 箭头展示 | demo/arrow.md |
| 贴边偏移 | demo/shift.md |
| 从浮层内关闭 | demo/control.md |
| 悬停点击弹出窗口 | demo/hover-with-click.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 卡片标题 | VueNode | - | - |
| content | 卡片内容 | VueNode | - | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | PopoverClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | PopoverStylesType | - | - |

Popover 还支持 Tooltip 的所有属性，详见 [Tooltip](../tooltip/docs.md#api)。

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 显隐变化时回调 | (open: boolean, e?: MouseEvent \| KeyboardEvent) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 卡片标题 | () =&gt; any | - |
| content | 卡片内容 | () =&gt; any | - |

## 注意 
请确保 `Popover` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。

## Semantic DOM 
| 名称 | 说明 |
| --- | --- |
| root | 根元素 |
| container | 内容容器 |
| arrow | 箭头元素 |
| title | 标题元素 |
| content | 内容元素 |

## FAQ

更多问题，请参考 [Tooltip FAQ](../tooltip/docs.md#faq)。
