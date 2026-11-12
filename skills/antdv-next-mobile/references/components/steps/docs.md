---
title: Steps
description: A navigation bar that guides users through the steps of a task.
---

## When To Use

- When a task is complicated or has a certain sequence, break it down into a series of steps to reduce the user's cognitive load.
- To show the current progress of a flow such as an order, a delivery or an approval.

The API is aligned with `Steps` of antdv-next (`items`, `current`, `status`, `orientation`, `titlePlacement`, `type`, etc.).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Step status | demo/status.md |
| Vertical steps | demo/vertical.md |
| Dot style | demo/dot.md |
| Custom icon | demo/icon.md |
| Title placement and size | demo/title-placement.md |
| Clickable | demo/clickable.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Step configuration | [StepsItem](#stepsitem)[] | `[]` |
| current(v-model) | The current step, counted from `initial` | `number` | `0` |
| initial | The starting index | `number` | `0` |
| status | The status of the current step | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| orientation | The direction of the steps | `'horizontal' \| 'vertical'` | `'horizontal'` |
| titlePlacement | The position of the title relative to the icon, only works in the horizontal direction | `'horizontal' \| 'vertical'` | `'vertical'` |
| type | The type of the steps | `'default' \| 'dot'` | `'default'` |
| size | Size | `'default' \| 'small'` | `'default'` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemSection' \| 'itemHeader' \| 'itemTitle' \| 'itemSubtitle' \| 'itemContent' \| 'itemRail', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemSection' \| 'itemHeader' \| 'itemTitle' \| 'itemSubtitle' \| 'itemContent' \| 'itemRail', CSSProperties>` | - |
| ~~direction~~ | Use `orientation` instead | `'horizontal' \| 'vertical'` | - |
| ~~labelPlacement~~ | Use `titlePlacement` instead | `'horizontal' \| 'vertical'` | - |
| ~~progressDot~~ | Use `type="dot"` instead | `boolean` | `false` |

### StepsItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `VueNode` | - |
| subTitle | Subtitle | `VueNode` | - |
| content | Detailed description of the step | `VueNode` | - |
| icon | Custom icon | `VueNode` | - |
| status | The status of the step; derived from `current` automatically when not set | `'wait' \| 'process' \| 'finish' \| 'error'` | - |
| disabled | Disable clicking | `boolean` | `false` |
| class | Class name of the step | `string` | - |
| style | Style of the step | `CSSProperties` | - |
| ~~description~~ | Use `content` instead | `VueNode` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when a step is clicked to switch. Steps are clickable only when this event is listened to (or `v-model:current` is used) | `(current: number) => void` |
| update:current | Triggered when a step is clicked to switch, for `v-model:current` | `(current: number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| iconRender | Custom icon rendering, takes precedence over `item.icon` | `{ item: StepsItem, index: number, status: string, active: boolean }` |

## Design Token

Customize through `theme.components.Steps` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-steps-icon-size` | Size of the icon container | `28px` |
| `--am-steps-icon-font-size` | Font size of the step number | `var(--am-font-size)` |
| `--am-steps-custom-icon-font-size` | Font size of a custom icon | `22px` |
| `--am-steps-dot-size` | Dot size of the dot style | `8px` |
| `--am-steps-title-font-size` | Title font size | `var(--am-font-size)` |
| `--am-steps-title-line-height` | Title line height | `22px` |
| `--am-steps-content-font-size` | Description font size | `var(--am-font-size-sm)` |
| `--am-steps-rail-size` | Thickness of the connecting line | `var(--am-line-width)` |
| `--am-steps-rail-color` | Color of the connecting line | `var(--am-color-border)` |
| `--am-steps-rail-gap` | Gap between the connecting line and the icon | `6px` |
| `--am-steps-process-color` | Color of the in-progress status | `var(--am-color-primary)` |
| `--am-steps-finish-color` | Color of the finished status | `var(--am-color-primary)` |
| `--am-steps-error-color` | Color of the error status | `var(--am-color-error)` |
| `--am-steps-wait-color` | Color of the waiting status | `var(--am-color-text-tertiary)` |
| `--am-steps-item-gap` | Gap between vertical steps | `var(--am-padding)` |

## Differences from PC

- `titlePlacement` in the horizontal direction defaults to `vertical` (title below the icon), which suits narrow screens better; PC defaults to `horizontal`.
- `type` only supports `default` and `dot`; `navigation`, `inline` and `panel` are not supported.
- `variant`, `percent`, `responsive`, `ellipsis`, `maxCount` and `offset` are not supported; `progressDot` only supports a boolean.
- `iconRender` is only available as a slot, with the parameter `{ item, index, status, active }`; step items do not support `onClick`, use the `change` event instead.
- Steps are also clickable when `v-model:current` is used (PC requires listening to `change`).
