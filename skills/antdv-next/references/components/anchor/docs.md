---
title: Anchor
subtitle: 锚点
description: 用于跳转到页面指定位置。
---

## 何时使用 
需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 横向 Anchor | demo/horizontal.md |
| 静态位置 | demo/static.md |
| 自定义 onClick 事件 | demo/onClick.md |
| 自定义锚点高亮 | demo/customizeHighlight.md |
| 设置锚点滚动偏移量 | demo/targetOffset.md |
| 监听锚点链接改变 | demo/onChange.md |
| 替换历史中的 href | demo/replace.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Anchor

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| affix | 固定模式 | boolean \| Omit&lt;AffixProps, 'offsetTop' \| 'target' \| 'children'&gt; | true | |
| bounds | 锚点区域边界 | number | 5 | - |
| getContainer | 指定滚动的容器 | () =&gt; HTMLElement | () =&gt; window | - |
| getCurrentAnchor | 自定义高亮的锚点 | (activeLink: string) =&gt; string | - | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - | - |
| showInkInFixed | `affix=&#123;false&#125;` 时是否显示小方块 | boolean | false | - |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#anchor-demo-targetoffset) | number | - | - |
| items | 数据化配置选项内容，支持通过 children 嵌套 | &#123; key, href, title, target, children &#125;\[] [具体见](#anchoritem) | - | |
| direction | 设置导航方向 | `vertical` \| `horizontal` | `vertical` | |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false |  |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | `click` 事件的 handler | (e: MouseEvent, link: &#123; title: VueNode, href: string &#125;) =&gt; void | - |
| change | 监听锚点链接改变 | (currentActiveLink: string) =&gt; void | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| item | 自定义锚点项的渲染 | (item: AnchorItem) =&gt; any | - |

## 类型 
### AnchorItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | 唯一标志 | string \| number | - | - |
| href | 锚点链接 | string | - | - |
| target | 该属性指定在何处显示链接的资源 | string | - | - |
| title | 文字内容 | VueNode | - | - |
| children | 嵌套的 Anchor Link，`注意：水平方向该属性不支持` | [AnchorItem](#anchoritem)\[] | - | - |
| replace | 替换浏览器历史记录中的项目 href 而不是推送它 | boolean | false | |

#### AnchorItemLink

建议使用 items 形式。

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| href | 锚点链接 | string | - | - |
| target | 该属性指定在何处显示链接的资源 | string | - | - |
| title | 文字内容 | VueNode | - | - |

## 语义化 DOM 
| 属性 | 说明 | 版本 |
| --- | --- | --- |
| root | 根节点 | - |
| ink | 锚点滚动区域 | - |
| item | 锚点项 | - |
| itemTitle | 锚点项标题 | - |
| indicator | 锚点指示器 | - |

## FAQ

### 在 `5.25.0+` 版本中，锚点跳转后，目标元素的 `:target` 伪类未按预期生效 
出于页面性能优化考虑，锚点跳转的实现方式从 `window.location.href` 调整为 `window.history.pushState/replaceState`。由于 `pushState/replaceState` 不会触发页面重载，因此浏览器不会自动更新 `:target` 伪类的匹配状态。可以手动构造完整URL：`href = window.location.origin + window.location.pathname + '#xxx'` 来解决这问题。

相关issues：[#53143](https://github.com/ant-design/ant-design/issues/53143) [#54255](https://github.com/ant-design/ant-design/issues/54255)
