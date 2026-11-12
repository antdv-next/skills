---
title: Segmented
description: Display multiple options and allow users to select a single one.
---

## When To Use

- Switch between 2 ~ 5 mutually exclusive options or views, such as "Day / Week / Month".
- When there are few options with short labels and all of them should always be visible.

The API is aligned with `Segmented` of antdv-next, and the selected thumb moves with a smooth sliding animation.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Full width | demo/block.md |
| Size and shape | demo/size.md |
| Icon | demo/icon.md |
| Disabled | demo/disabled.md |
| Vertical direction | demo/vertical.md |
| Custom rendering and design tokens | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Options configuration | `(string \| number \| SegmentedLabeledOption)[]` | `[]` |
| value(v-model) | The currently selected value | `string \| number` | - |
| defaultValue | The default selected value | `string \| number` | The value of the first option |
| block | Fit the width of the parent element, options share the width equally | `boolean` | `false` |
| size | Size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| shape | Shape | `'default' \| 'round'` | `'default'` |
| disabled | Whether disabled | `boolean` | `false` |
| vertical | Arrange vertically | `boolean` | `false` |
| orientation | Orientation, takes precedence over `vertical` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'icon' \| 'label', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'icon' \| 'label', CSSProperties>` | - |

### SegmentedLabeledOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Option text | `VueNode` | - |
| value | Option value | `string \| number` | - |
| icon | Option icon | `VueNode` | - |
| disabled | Whether the option is disabled | `boolean` | `false` |
| className | Option class name | `string` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the selected option changes | `(value: string \| number) => void` |
| update:value | Triggered when the selected option changes, used by `v-model:value` | `(value: string \| number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| iconRender | Custom icon, takes precedence over `option.icon` | `SegmentedLabeledOption` |
| labelRender | Custom label, takes precedence over `option.label` | `SegmentedLabeledOption` |

## Design Token

Customize through `theme.components.Segmented` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-segmented-height` | Overall height | `var(--am-control-height-sm)` |
| `--am-segmented-padding` | Track padding | `2px` |
| `--am-segmented-font-size` | Font size | `var(--am-font-size)` |
| `--am-segmented-item-padding-inline` | Horizontal padding of an option | `var(--am-padding-sm)` |
| `--am-segmented-background` | Track background color | `var(--am-color-fill-secondary)` |
| `--am-segmented-color` | Option text color | `var(--am-color-text-secondary)` |
| `--am-segmented-selected-color` | Text color of the selected option | `var(--am-color-text)` |
| `--am-segmented-selected-background` | Background color of the selected thumb | `var(--am-color-bg-elevated)` |
| `--am-segmented-border-radius` | Track border radius | `var(--am-border-radius)` |
| `--am-segmented-item-border-radius` | Border radius of the options and the thumb | Track border radius minus the padding |

## Differences from PC

- Options do not support `tooltip` (there is no hover on mobile) and have no hover state; press feedback uses `:active`.
- `name` is not supported: options are implemented with `role="radio"` elements and no native `<input type="radio">` is rendered.
- The value type of `options` is fixed to `string | number`; no generic parameter is provided.
- When uncontrolled and `defaultValue` is not set, the first option is selected by default.
