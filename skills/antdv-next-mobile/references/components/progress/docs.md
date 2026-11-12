---
title: Progress
description: Display the current progress of an operation.
---

## When To Use

If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.

- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
- When you need to display the completion percentage of an operation.

The API is aligned with the `Progress` of antdv-next: `type` (`line` / `circle` / `dashboard`), `percent`, `status`, `strokeColor` (solid / gradient), `success`, `steps`, `size`, `percentPosition`.

## Examples

| Demo | Path |
| --- | --- |
| Progress bar | demo/line.md |
| Circular progress bar | demo/circle.md |
| Dashboard | demo/dashboard.md |
| Dynamic | demo/dynamic.md |
| Custom text format | demo/format.md |
| Gradient | demo/gradient.md |
| Progress bar with success segment | demo/segment.md |
| Progress bar with steps | demo/steps.md |
| Size and info position | demo/size.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | The type | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| percent | The completion percentage | `number` | `0` |
| status | The status, becomes `success` automatically when `percent` reaches 100; `active` only works with `line` | `'normal' \| 'active' \| 'success' \| 'exception'` | - |
| showInfo | Whether to display the progress value or the status icon | `boolean` | `true` |
| format | The template function of the content, the default slot takes precedence | `(percent?: number, successPercent?: number) => VNodeChild` | `percent => percent + '%'` |
| strokeColor | The color of the progress bar: a solid color, a gradient, or an array of colors for each step in `steps` mode | `string \| string[] \| { from: string, to: string, direction?: string } \| Record<string, string>` | - |
| railColor | The color of the unfilled part | `string` | - |
| strokeLinecap | The style of the progress bar ends | `'round' \| 'butt' \| 'square'` | `'round'` |
| strokeWidth | Line width: px for `line`, a percentage of the canvas width for `circle` / `dashboard` | `number` | `line`: `8`, others `6` |
| success | Configs of the successfully finished progress bar | `{ percent?: number, strokeColor?: string }` | - |
| size | The size. `line`: `[width, height]` (a number means the line thickness); `circle` / `dashboard`: the diameter | `'small' \| 'medium' \| number \| [number \| string, number] \| { width?: number, height?: number }` | `'medium'` |
| steps | The total number of steps (`line` only) | `number \| { count: number, gap?: number }` | - |
| rounding | The rounding function of the finished steps in `steps` mode | `(step: number) => number` | `Math.round` |
| percentPosition | Position of the progress value (`line` only): shown inside the progress bar when `type` is `inner` | `{ align?: 'start' \| 'center' \| 'end', type?: 'inner' \| 'outer' }` | `{ align: 'end', type: 'outer' }` |
| gapDegree | The gap degree of the circle, 0 ~ 295 | `number` | `dashboard`: `75` |
| gapPlacement | The gap placement of the circle | `'top' \| 'bottom' \| 'start' \| 'end'` | `dashboard`: `'bottom'` |
| trailColor | Deprecated, use `railColor` instead | `string` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'body' \| 'rail' \| 'track' \| 'indicator', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'body' \| 'rail' \| 'track' \| 'indicator', CSSProperties>` | - |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom progress info content, takes precedence over `format` | `{ percent: number, successPercent?: number }` |

## Design Token

Customize through `theme.components.Progress` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-progress-color` | Default color of the progress bar | `var(--am-color-primary)` |
| `--am-progress-rail-color` | Rail color | `var(--am-color-fill-secondary)` |
| `--am-progress-success-color` | Success status color | `var(--am-color-success)` |
| `--am-progress-exception-color` | Exception status color | `var(--am-color-error)` |
| `--am-progress-line-height` | Thickness of the line progress bar | `8px` (small `6px`) |
| `--am-progress-line-border-radius` | Border radius of the line progress bar | `100px` |
| `--am-progress-info-color` | Progress text color | `var(--am-color-text)` |
| `--am-progress-info-font-size` | Progress text font size | `var(--am-font-size)` |
| `--am-progress-info-gap` | Gap between the progress bar and the text | `var(--am-margin-xs)` |
| `--am-progress-circle-info-color` | Text color of the circular progress bar | `var(--am-color-text)` |
| `--am-progress-steps-item-width` | Width of a single cell of the steps progress bar | `14px` |
| `--am-progress-steps-gap` | Gap of the steps progress bar | `2px` |

## Differences from PC

- When `size` is a number and `type="line"`, it means the line thickness (on PC it applies to both width and height).
- The gradient of the circular progress bar is implemented with an SVG linear gradient, conic gradients are not supported.
- When `strokeColor` is an array of multiple colors, the line progress bar renders an evenly divided linear gradient.
- `steps` is not supported for the circular progress bar yet; the deprecated `width` and `gapPosition` are not supported.
- A small circular progress bar does not show the value in a tooltip on hover, the text is always displayed inside the ring and can be hidden with `showInfo`.
