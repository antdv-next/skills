---
title: Splitter
description: Split panels to isolate content.
---

## When To Use

Provide a draggable split panel for creating complex multi-column or multi-row layouts.

## Demos

| Demo | Path |
| --- | --- |
| Basic | demo/size.md |
| Vertical | demo/vertical.md |
| Controlled | demo/control.md |
| Collapsible | demo/collapsible.md |
| Collapsible Icon | demo/collapsibleIcon.md |
| Multiple | demo/multiple.md |
| Layout Group | demo/group.md |
| Size Mix | demo/size-mix.md |
| Lazy | demo/lazy.md |
| Double-clicked reset | demo/reset.md |
| Custom semantic dom styling | demo/style-class.md |

## API

Common props ref：[Common props](../../docs/vue/common-props.md)

### Splitter

#### Props 
| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| collapsible | `motion` to enable collapse animation, `icon` to customize collapse icons. Set `aria-label` on a custom icon to override the localized control name | &#123; motion?: boolean; icon?: &#123; start?: VueNode; end?: VueNode &#125; &#125; | - | `aria-label`: 1.7.0 | × |
| collapsibleIcon | Custom collapsible icon | &#123; start?: VueNode; end?: VueNode &#125; | - | 1.0.0 | × |
| destroyOnHidden | Destroy panel content when collapsed (`size` is 0). Applies to all panels, can be overridden per panel | boolean | false | 1.7.1 | × |
| draggerIcon | Custom dragger icon | VueNode | - | 1.0.0 | × |
| lazy | Lazy rendering mode | boolean | false | 1.0.0 | × |
| orientation | Layout direction | `vertical` \| `horizontal` | `horizontal` | 1.0.0 | × |
| vertical | Orientation, Simultaneously existing with `orientation`, `orientation` takes priority | boolean | false | 1.0.0 | × |

#### Events 
| Event | Description | Type | Version |
| --- | --- | --- | --- |
| collapse | Callback when expanding or collapsing | (collapsed: boolean[], sizes: number[]) =&gt; void | 1.0.0 |
| resize | Panel size change callback | (sizes: number[]) =&gt; void | - |
| resizeEnd | Drag end callback | (sizes: number[]) =&gt; void | - |
| resizeStart | Callback before dragging starts | (sizes: number[]) =&gt; void | - |

#### Slots 
| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| collapsibleIconEnd | Custom collapsible end icon | () =&gt; VueNode | - |
| collapsibleIconStart | Custom collapsible start icon | () =&gt; VueNode | - |
| draggerIcon | Custom dragger icon | () =&gt; VueNode | 1.0.0 |

### SplitterPanel

#### Props 
| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| collapsible | Enable collapsible | boolean \| &#123; start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' &#125; | false | 1.0.0 |
| defaultSize | Initial panel size, supports px and percentage | number \| string | - | - |
| destroyOnHidden | Destroy panel content when collapsed (`size` is 0). Overrides Splitter's `destroyOnHidden` | boolean | - | 1.3.0 |
| max | Maximum threshold, supports px and percentage | number \| string | - | - |
| min | Minimum threshold, supports px and percentage | number \| string | - | - |
| resizable | Whether to enable resize | boolean | true | - |
| size | Controlled panel size, supports px and percentage | number \| string | - | - |

## Semantic DOM

| _semantic | demo/_semantic.md |
