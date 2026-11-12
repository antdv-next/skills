---
title: Flex
description: A flex layout container for alignment.
---

## When To Use

- When you need to set the gap, alignment and wrapping of elements.
- Difference from `Space`: `Space` wraps every child in an element for inline alignment; `Flex` adds no wrapper element, which suits page-level block layouts.

## Examples

| Demo | Path |
| --- | --- |
| Basic layout | demo/basic.md |
| Alignment | demo/align.md |
| Gap | demo/gap.md |
| Wrap | demo/wrap.md |
| Combination | demo/combination.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| vertical | Whether the main axis is vertical, i.e. `flex-direction: column` | `boolean` | `false` |
| orientation | Direction of the main axis, `vertical` takes precedence | `'horizontal' \| 'vertical'` | `'horizontal'` |
| wrap | Whether to wrap, `true` is equivalent to `wrap`, any [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) value is also accepted | `boolean \| CSSProperties['flexWrap']` | `false` |
| justify | Alignment on the main axis, same as [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `CSSProperties['justifyContent']` | `'normal'` |
| align | Alignment on the cross axis, same as [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | `CSSProperties['alignItems']` | `'normal'` |
| flex | The [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) shorthand property of the container itself | `CSSProperties['flex']` | - |
| gap | Gap between children, presets `small`(8px) / `middle`(16px) / `large`(24px), numbers are in px, any CSS length is also accepted | `'small' \| 'middle' \| 'large' \| number \| string` | - |
| component | Custom root element | `string \| Component` | `'div'` |
| rootClass | Class name of the root node | `string` | - |

### Slots

| Slot | Description |
| --- | --- |
| default | Children |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-flex-gap-small` | Gap of `gap="small"` | `var(--am-padding-xs)` |
| `--am-flex-gap-middle` | Gap of `gap="middle"` | `var(--am-padding)` |
| `--am-flex-gap-large` | Gap of `gap="large"` | `var(--am-padding-lg)` |

## Differences from PC

- `justify` / `align` / `flex` and custom `gap` values are output as inline styles (utility class names on PC), and the `style` passed by the user has higher priority.
- `orientation="vertical"` is additionally supported, consistent with `Space` and `Divider`.
