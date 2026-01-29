---
title: Splitter
subtitle: 分割面板
description: 分割面板用于隔离内容。
---

## 何时使用

提供可拖动的分割面板，用于创建复杂的多列或多行布局。

## Demos

| Demo | Path |
| --- | --- |
| 基础用法 | demo/size.md |
| 垂直 | demo/vertical.md |
| 受控模式 | demo/control.md |
| 可折叠 | demo/collapsible.md |
| 折叠图标 | demo/collapsibleIcon.md |
| 多面板 | demo/multiple.md |
| 布局组合 | demo/group.md |
| 尺寸混合 | demo/size-mix.md |
| 延迟渲染 | demo/lazy.md |
| 嵌套在 Tabs 中 | demo/nested-in-tabs.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Splitter

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsibleIcon | 自定义折叠图标 | &#123; start?: VueNode; end?: VueNode &#125; | - | 6.0.0 |
| draggerIcon | 自定义拖拽图标 | VueNode | - | 6.0.0 |
| lazy | 延迟渲染模式 | boolean | false | 5.23.0 |
| orientation | 布局方向 | `vertical` \| `horizontal` | `horizontal` | - |
| vertical | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean | false | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| collapse | 展开-收起时回调 | (collapsed: boolean[], sizes: number[]) =&gt; void | 5.28.0 |
| resize | 面板大小变化回调 | (sizes: number[]) =&gt; void | - |
| resizeEnd | 拖拽结束回调 | (sizes: number[]) =&gt; void | - |
| resizeStart | 开始拖拽之前回调 | (sizes: number[]) =&gt; void | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| collapsibleIconEnd | 自定义折叠结束图标 | () =&gt; VueNode | - |
| collapsibleIconStart | 自定义折叠开始图标 | () =&gt; VueNode | - |
| draggerIcon | 自定义拖拽图标 | () =&gt; VueNode | 6.0.0 |

### SplitterPanel

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 启用折叠 | boolean \| &#123; start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' &#125; | false | 5.28.0 |
| defaultSize | 面板初始大小，支持像素和百分比 | number \| string | - | - |
| max | 最大阈值，支持像素和百分比 | number \| string | - | - |
| min | 最小阈值，支持像素和百分比 | number \| string | - | - |
| resizable | 是否启用拉伸 | boolean | true | - |
| size | 受控面板大小，支持像素和百分比 | number \| string | - | - |

## Semantic DOM
