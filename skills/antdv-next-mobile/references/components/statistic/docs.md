---
title: Statistic
description: Display statistic numbers, as well as countdown / count-up timers.
---

## When To Use

- When you want to highlight a number or a group of numbers.
- When you want to display statistic data with a description.
- Use `Statistic.Timer` for scenarios that need a countdown, such as flash sales, verification codes and event starts.

The API is aligned with `Statistic` / `Statistic.Timer` of antdv-next.

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Prefix and suffix | demo/unit.md |
| In a card | demo/card.md |
| Custom format | demo/formatter.md |
| Loading | demo/loading.md |
| Number animation | demo/animation.md |
| Timer | demo/timer.md |
| Custom countdown style | demo/timer-custom.md |

## API

### Statistic Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title of the value, the same-named slot takes precedence | `VueNode` | - |
| value | The value to display | `number \| string` | `0` |
| precision | Precision of the value (number of decimal places) | `number` | - |
| prefix | Prefix of the value, the same-named slot takes precedence | `VueNode` | - |
| suffix | Suffix of the value, the same-named slot takes precedence | `VueNode` | - |
| formatter | Customize how the value is displayed, the same-named slot takes precedence | `(value: number \| string, config?: StatisticFormatConfig) => VNodeChild` | - |
| groupSeparator | Thousands separator | `string` | `,` |
| decimalSeparator | Decimal separator | `string` | `.` |
| loading | Whether the value is loading | `boolean` | `false` |
| animation | Number animation: counts from the start value to `value` on mount, then rolls from the current number to every new value. Numeric values only | `boolean \| { duration?: number, from?: number, easing?: (progress: number) => number }` | `false` |
| valueStyle | Style of the value area | `CSSProperties` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'header' \| 'title' \| 'content' \| 'prefix' \| 'value' \| 'suffix', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'header' \| 'title' \| 'content' \| 'prefix' \| 'value' \| 'suffix', CSSProperties>` | - |

When `animation` is an object: `duration` is the animation time (ms, `1000` by default), `from` the start value of the first animation (`0` by default) and `easing` the easing function (ease-out by default).

### Statistic Events

| Event | Description | Type |
| --- | --- | --- |
| animationEnd | Triggered when the number animation reached the value | `() => void` |

### Statistic Slots

| Slot | Description | Params |
| --- | --- | --- |
| title | Title of the value | - |
| prefix | Prefix of the value | - |
| suffix | Suffix of the value | - |
| formatter | Customize how the value is displayed. It receives the running number during an animation | `{ value: number \| string }` |

### Statistic.Timer Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Timer type: countdown or count-up | `'countdown' \| 'countup'` | `'countdown'` |
| value | Timestamp of the target time (countdown) or the start time (count-up) | `number \| string` | `0` |
| format | Format template, supports `Y` `M` `D` `H` `m` `s` `S`, text inside `[]` is output as is | `string` | `'HH:mm:ss'` |
| title | Title, the same-named slot takes precedence | `VueNode` | - |
| prefix | Prefix, the same-named slot takes precedence | `VueNode` | - |
| suffix | Suffix, the same-named slot takes precedence | `VueNode` | - |
| loading | Whether it is loading | `boolean` | `false` |
| valueStyle | Style of the value area | `CSSProperties` | - |

`rootClass`, `classes` and `styles` are supported as well.

### Statistic.Timer Events

| Event | Description | Type |
| --- | --- | --- |
| finish | Triggered when the countdown finishes, only works with `type="countdown"` | `() => void` |
| change | Triggered when the time changes, the argument is the remaining / elapsed milliseconds | `(value: number) => void` |

### Statistic.Timer Slots

| Slot | Description | Params |
| --- | --- | --- |
| title | Title | - |
| prefix | Prefix | - |
| suffix | Suffix | - |
| formatter | Custom rendering, e.g. a digit block style | `{ value: number, formatted: string, time: { days, hours, minutes, seconds, milliseconds } }` |

## Design Token

Customize through `theme.components.Statistic` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-statistic-title-color` | Title color | `var(--am-color-text-description)` |
| `--am-statistic-title-font-size` | Title font size | `var(--am-font-size)` |
| `--am-statistic-title-margin` | Gap between the title and the value | `var(--am-margin-xxs)` |
| `--am-statistic-content-color` | Value color | `var(--am-color-text-heading)` |
| `--am-statistic-content-font-size` | Value font size | `24px` |
| `--am-statistic-content-font-weight` | Value font weight | `400` |
| `--am-statistic-decimal-font-size` | Font size of the decimal part | `0.75em` |
| `--am-statistic-gap` | Gap between the prefix / suffix and the value | `4px` |

## Differences from PC

- Adds the `animation` prop and the `animationEnd` event for a rolling number animation. With "reduce motion" enabled in the system the final value is shown right away. The same behaviour is available on its own through the `useCountTo` composable.
- `type` of `Statistic.Timer` defaults to `'countdown'` (required on PC).
- `Statistic.Timer` adds a `formatter` slot that provides the split `time` (days / hours / minutes / seconds / milliseconds), making it easy to build the digit block countdown common on mobile.
- The `formatter` prop only supports functions, not the `'number'` / `'countdown'` literals used internally on PC.
- `valueRender` is not supported, and the `mouseenter` / `mouseleave` events are not exposed; there is no deprecated `Statistic.Countdown`.
- The timer pauses automatically when the page is cached by `KeepAlive`, and continues from the current time once activated.
