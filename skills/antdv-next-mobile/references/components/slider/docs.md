---
title: Slider
description: A Slider component for displaying current value and intervals in range.
---

## When To Use

To input a value in a range / custom range, either continuous or discrete.

The API is aligned with the `Slider` of Antdv Next and optimized for touch: a larger handle and hit area, a value tooltip while dragging, and a horizontal slider that does not block the vertical scrolling of the page.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Range | demo/range.md |
| Step and dots | demo/step.md |
| Marks | demo/marks.md |
| Value tooltip | demo/tooltip.md |
| Events | demo/event.md |
| Reverse | demo/reverse.md |
| Vertical | demo/vertical.md |
| Custom handle and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The current value, `[number, number]` when `range`, supports `v-model:value` | `number \| [number, number]` | - |
| defaultValue | The initial value | `number \| [number, number]` | `0 \| [0, 0]` |
| min | The minimum value | `number` | `0` |
| max | The maximum value | `number` | `100` |
| step | The step, must be greater than 0. It can be set to `null` when `marks` is not empty, then the only selectable values are `marks`, `min` and `max` | `number \| null` | `1` |
| range | Dual handle mode | `boolean` | `false` |
| disabled | Disabled state | `boolean` | `false` |
| marks | Tick marks, the key must be a `number` within the closed interval [min, max], each label can be styled individually | `Record<number, VueNode \| { style?: CSSProperties, label?: VueNode }>` | - |
| dots | Whether to show a dot for each step | `boolean` | `false` |
| included | `true` means the values are inclusive (the selected track is shown), `false` means they are independent | `boolean` | `true` |
| reverse | Reverse the axis | `boolean` | `false` |
| vertical | Vertical direction | `boolean` | `false` |
| orientation | The orientation, takes precedence over `vertical` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| keyboard | Support operating the handle with the keyboard (arrow keys, Home, End) | `boolean` | `true` |
| tooltip | Value tooltip config | [TooltipConfig](#tooltipconfig) | - |
| id | The id of the first handle, set automatically inside `Form.Item` | `string` | - |
| ariaLabelForHandle | The `aria-label` of the handle | `string \| string[]` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'rail' \| 'track' \| 'handle', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'rail' \| 'track' \| 'handle', CSSProperties>` | - |

### TooltipConfig

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | The tooltip is always shown when `true`; never shown when `false`; only shown while dragging when not set | `boolean` | - |
| formatter | Format the tooltip content, `null` hides the tooltip | `((value: number) => VueNode) \| null` | The raw value |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the value changes (fires continuously while dragging) | `(value: number \| [number, number]) => void` |
| changeComplete | Triggered when the finger leaves (or the mouse / key is released), with the current value as the argument | `(value: number \| [number, number]) => void` |
| update:value | `v-model:value` update | `(value: number \| [number, number]) => void` |
| focus | Triggered when a handle gets focus | `(event: FocusEvent) => void` |
| blur | Triggered when a handle loses focus | `(event: FocusEvent) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| mark | Custom mark content | `{ point: number, label?: any }` |
| handle | Custom handle content | `{ value: number, index: number, dragging: boolean }` |

### Methods

| Name | Description |
| --- | --- |
| focus() | Get focus |
| blur() | Remove focus |

## Design Token

Customize through `theme.components.Slider` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-slider-rail-size` | Rail thickness | `4px` |
| `--am-slider-handle-size` | Handle size | `24px` |
| `--am-slider-dot-size` | Dot size | `8px` |
| `--am-slider-rail-bg` | Rail background color | `var(--am-color-fill-secondary)` |
| `--am-slider-track-bg` | Selected track color | `var(--am-color-primary)` |
| `--am-slider-handle-bg` | Handle background color | `var(--am-color-white)` |
| `--am-slider-handle-shadow` | Handle shadow | `0 1px 4px 0 rgb(0 0 0 / 24%), 0 0 1px 0 rgb(0 0 0 / 16%)` |
| `--am-slider-dot-border-color` | Dot border color | `var(--am-color-border)` |
| `--am-slider-vertical-height` | Height in vertical mode | `200px` |

## Differences from PC

- `tooltip` is simplified to a value tooltip: only `open` and `formatter` are supported, it is only shown while dragging by default (shown on hover on PC), and `placement`, `getPopupContainer`, `autoAdjustOverflow` are not supported.
- `range` only supports `boolean`, RangeConfig such as `draggableTrack` and `editable` is not supported; the two handles can cross each other.
- `disabled` only supports `boolean`, the `boolean[]` form that disables handles individually is not supported.
- `classes` / `styles` only support the object form, the semantic parts are `root`, `rail`, `track`, `handle` (there is no `tracks`).
- Adds the `handle` slot for customizing the handle content, and the `focus` / `blur` events.
- `autoFocus`, `tabIndex` and aria passthrough props other than `ariaLabelForHandle` are not supported.
- Tapping anywhere on the rail makes the nearest handle jump to that position and it can then keep being dragged; pressing directly on a handle does not make it jump.
