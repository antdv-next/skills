---
title: RollingText
description: Digits or texts roll vertically to the target value, like an odometer.
---

## When To Use

- To emphasize a changing number with an animation: amounts, points, lottery numbers, dashboards.
- To flip through a list of equal-length texts (times, codes ...), use `texts`.
- To simply display a number, use [Statistic](../statistic/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Direction and stop order | demo/direction.md |
| Rolling texts | demo/texts.md |
| Custom style | demo/custom.md |
| Manual control | demo/manual.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Target number | `number` | `0` |
| from | Start number | `number` | `0` |
| duration | Rolling duration of each column, in seconds | `number` | `2` |
| autoStart | Whether to start once mounted; when on, a value change rolls again | `boolean` | `true` |
| direction | Rolling direction | `'up' \| 'down'` | `'down'` |
| stopOrder | Which side stops first: `ltr` left to right, `rtl` right to left | `'ltr' \| 'rtl'` | `'ltr'` |
| texts | When set, each column rolls through these equal-length strings instead of digits; the first one is the start, the last one the target | `string[]` | - |
| height | Row height, a number is in px | `number \| string` | `40` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item', CSSProperties>` | - |

- `from` and `value` are zero-padded to the same length (`from: 0`, `value: 123` rolls `000` → `123`) and share the same number of decimals; the decimal point and the minus sign do not roll.
- Neighbouring columns stop 0.2s apart, so the whole animation takes `duration + 0.2 × (columns - 1)` seconds.
- With `autoStart` set to `false`, a value change goes back to the start state and waits for the next `start()`.
- The root element has `role="img"` and an `aria-label` holding the target value; the rolling columns are hidden from screen readers.
- When the system asks for reduced motion (`prefers-reduced-motion`), the target value is shown right away and `finish` is still triggered.

### Events

| Event | Description | Type |
| --- | --- | --- |
| finish | Triggered when the last column stops rolling | `() => void` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| start | Start (or restart) rolling from the start value | `() => void` |
| reset | Stop and go back to the start value | `() => void` |

## Design Token

Customize through `theme.components.RollingText` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-rolling-text-color` | Text color | `var(--am-color-text-heading)` |
| `--am-rolling-text-font-size` | Font size | `24px` |
| `--am-rolling-text-font-weight` | Font weight | `var(--am-font-weight-strong)` |
| `--am-rolling-text-gap` | Gap between the items | `0px` |
| `--am-rolling-text-item-height` | Row height, overridden by the `height` prop | `40px` |
| `--am-rolling-text-item-width` | Width of each item | `auto` |
| `--am-rolling-text-item-background` | Background of each item | `transparent` |
| `--am-rolling-text-item-border-radius` | Border radius of each item | `0` |

## Differences from PC

- A mobile-only addition; antdv-next (PC) has no counterpart.
