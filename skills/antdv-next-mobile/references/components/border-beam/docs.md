---
title: BorderBeam
description: Decorative effect that renders a moving beam along the border of a container.
---

## When To Use

- When a container needs stronger visual emphasis without introducing business state semantics.
- Suitable for login panels, recommendation cards, AI modules and key action areas.
- It is a decoration: it should not replace focus rings, validation borders or status feedback. Emphasize one or two containers per screen at most.

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Show while pressed | demo/press.md |
| Multiple beams | demo/count.md |
| Custom container | demo/custom-container.md |
| Gradients | demo/color.md |
| Duration | demo/duration.md |
| Size | demo/size.md |
| Line width | demo/line-width.md |
| Outset | demo/outset.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Beam color: a solid color string or an array of gradient stops. `percent` uses the `0 ~ 100` range, the component reserves the space for the transparent tail internally | `string \| { color: string, percent: number }[]` | gradient of the primary color |
| count | Number of evenly distributed beams, a positive integer (fractions are floored, invalid values count as `1`) | `number` | `1` |
| duration | Time one loop takes, in seconds | `number` | `6` |
| items | Per-beam config. Its length is the number of beams and wins over `count`; omitted properties inherit the top-level `color`, `lineWidth`, `outset` and `size` | [BorderBeamItem](#borderbeamitem)`[]` | - |
| lineWidth | Width of the beam line, numbers are pixels | `number \| string` | `1px` |
| outset | How far the beam layer sits outside the padding box of the container, numbers are pixels | `number \| string` | border width of the container (`0` when it clips its overflow) |
| size | Size of the visible beam segment, numbers are pixels | `number \| string` | `100` |
| rootClass | Class name of the beam layer | `string` | - |
| classes | Semantic class names: `root` (the beam layer) | `BorderBeamSemanticClassNames` | - |
| styles | Semantic styles: `root` (the beam layer) | `BorderBeamSemanticStyles` | - |

`class`, `style` and other attributes passed to `BorderBeam` land on every beam layer, not on the container.

### BorderBeamItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color of this beam | `string \| { color: string, percent: number }[]` | - |
| lineWidth | Line width of this beam, numbers are pixels | `number \| string` | - |
| outset | Outset of this beam | `number \| string` | - |
| size | Size of the visible segment of this beam, numbers are pixels | `number \| string` | - |

### Slots

| Slot | Description |
| --- | --- |
| default | The decorated container: a single DOM element, or a component with a single root element |

## Design Token

Customize through `theme.components.BorderBeam` of `ConfigProvider` (e.g. `{ lineWidth: 2 }`) or by overriding the CSS variables. They are declared on the beam layer `.am-border-beam`; the matching props write the same variables inline.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-border-beam-color` | Start color of the default gradient (head of the beam) | `var(--am-color-primary)` |
| `--am-border-beam-color-end` | End color of the default gradient | `var(--am-color-primary-hover)` |
| `--am-border-beam-beam-gradient` | Beam gradient, written by the `color` prop | gradient of the two colors above |
| `--am-border-beam-line-width` | Line width, written by the `lineWidth` prop | `var(--am-line-width)` |
| `--am-border-beam-size` | Size of the visible segment, written by the `size` prop | `100px` |
| `--am-border-beam-duration` | Time of one loop, written by the `duration` prop | `6s` |
| `--am-border-beam-delay` | Animation delay, written by the component for multiple beams | `0s` |
| `--am-border-beam-inset-offset` | `inset` of the beam layer, written from `outset` or the measured border width | `0px` |
| `--am-border-beam-opacity` | Opacity of the beam | `0.95` |
| `--am-border-beam-z-index` | Stacking order of the beam layer | `1` |

## FAQ

### What happens with reduced motion?

`BorderBeam` is a decoration. When `prefers-reduced-motion: reduce` matches, the beam is hidden and the container is left untouched.

### What does `percent` mean in `color`?

`percent` is the input position of a gradient stop in the `0 ~ 100` range. The stops are mapped into the visible beam segment (the first 70%) and the rest is reserved for the transparent tail, which keeps the trail continuous.

### Limits of `size`

The beam is a square gradient layer with a side of `size` that travels along the border; the mask only shows where it overlaps the border. On a horizontal edge the layer extends about `size / 2` to both sides of the border, so once `size` approaches twice the container height it may cover the top and bottom borders at the same time (the same goes for the width). Keep `size < 2 × min(width, height)`, especially for small cards on a phone.

### Why is there no effect?

- The default slot must be a **single** DOM element, or a component with a single root element. Several nodes, plain text or a multi-root component cannot be resolved to a container, so no beam is rendered.
- The beam layer uses `position: absolute`: the container has to be a positioning context (usually `position: relative`). `BorderBeam` never changes the styles of the container.
- The beam layer is inserted as the last child of the container. If the content of the container is plain text written by the framework (e.g. `<div>{{ text }}</div>`), a text update replaces the beam layer as well: wrap the text in an element.
- The browser needs `offset-path: rect()` and `mask-composite`; in older browsers without them the beam layer stays hidden and the container is unaffected.
- The border width of the container and whether it clips its overflow are read once on mount and not observed afterwards. The radius follows live through `border-radius: inherit`, without measuring.

## Differences from PC

- Props and slots are identical to PC; `prefixCls` is dropped, and `classes` / `styles` (`root`) are added following the conventions of this library.
- CSS-in-JS is replaced by plain CSS variables: the props write `--am-border-beam-*`, the defaults are declared on `.am-border-beam`. Besides the `lineWidth` token of PC, the colors, size, duration, opacity and z-index are overridable tokens too.
- When the container clips its overflow (`overflow` other than `visible`, e.g. the Card of this library), the default `outset` is `0` automatically, so the beam sits right inside the border instead of being cut off; PC needs an explicit `outset={0}`.
- No hover state: the "Show on hover" demo of PC becomes "Show while pressed" (`:active`).
- In RTL the beam travels counter-clockwise (always clockwise on PC).
- `items` wins when both `count` and `items` are given, but no development warning is printed.
- The beam layer is rendered into the container through `_base/Portal`; every beam is a direct child of the container.
