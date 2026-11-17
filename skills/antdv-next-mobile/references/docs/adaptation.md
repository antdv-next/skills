---
title: Design Adaptation
---

The library is drawn on a 375 wide design and every length is expressed in "units": `1 unit = var(--am-unit)`, `1px` by default. A `40px` in the stylesheets is compiled to `calc(40 * var(--am-unit))` at build time, so changing this single variable makes the whole library follow your adaptation scheme. No build configuration is needed.

## Pick a scheme

| Your project | `--am-unit` | Notes |
| --- | --- | --- |
| Fixed pixels (default) | `1px` | No scaling, nothing to set |
| Scale with the viewport | `calc(100vw / 375)` | Same value for 375 and 750 designs |
| Scale with a maximum width | `calc(min(100vw, 540px) / 375)` | Stops growing on tablets and desktop browsers |
| rem (root font size = viewport width / 10) | `calc(1rem / 37.5)` | Follows the root font size of `amfe-flexible` style setups |
| `<meta name="viewport" content="width=750">` | `2px` | The page itself is 750 wide |

Whether the design is 375 or 750 wide only changes how you write your own code; the library just needs to know how long one unit is. With a 750 design, a button that is 80 tall becomes `80 / 750 * 100vw` after your `px → vw` conversion. The button of the library is 40 units, `40 * 100vw / 375`, which is the same length.

## Usage

On `:root`, for the whole page:

```css
:root {
  --am-unit: calc(100vw / 375);
}
```

Or with `applyTheme`, which can be switched at runtime:

```ts
import { theme } from '@antdv-next/mobile'

theme.applyTheme({ token: { unit: 'calc(100vw / 375)' } })
```

To scale only a part of the page use a `ConfigProvider`; its popups follow:

```vue
<am-config-provider :theme="{ token: { unit: 'calc(100vw / 375)' } }">
  <App />
</am-config-provider>
```

A number is `px`: `unit: 2` is the same as `--am-unit: 2px`.

> Set it through `:root`, `applyTheme` or `ConfigProvider`. Writing `--am-unit` on an arbitrary element only affects the styles; the sizes computed in JS (wheels, virtual lists) cannot measure it.

## Write numbers on your own design

`--am-unit` decides how large the library itself is. When your design is not 375 wide, `designWidth` additionally tells the library **which design the numbers you pass are written on**.

```ts
theme.applyTheme({
  token: {
    unit: 'calc(100vw / 375)',
    designWidth: 750,
    // every number below is read on the 750 design
    borderRadius: 16, // same as the default 8
  },
})
```

```vue
<!-- 88 measured on a 750 design is 44 for the library -->
<am-picker-view :item-height="88" />
<am-avatar :size="96" />
<am-space :size="24" />
```

Only the numbers you pass are affected: numeric size props, and the numbers in `theme.token` and `theme.components`. The defaults of the library do not change, so a component without those props looks the same as on a 375 design.

The css variable behind it is `--am-design-unit` (equal to `--am-unit` by default); `designWidth: 750` emits `--am-design-unit: calc(var(--am-unit) * 375 / 750)`.

## What scales

- Lengths in the stylesheets are units and follow `--am-unit`.
- Numbers in `theme.token` and `theme.components`, and numeric size props (`itemHeight`, `size`, `gap`, `offsetTop` ...) are lengths on your design and follow `--am-design-unit`; both are the same without `designWidth`.
- Values up to `1px` (borders, hairlines) and from `999px` (pill radii) are kept as they are.
- Strings are passed through, write `'20px'` for a fixed size.
- Gesture distances, scroll positions, the `anchors` of `FloatingPanel` and the numbers of event payloads are real pixels.
- When scaling with the viewport, inputs drop below `16px` on screens narrower than 375 and iOS Safari zooms in on focus; `calc(max(100vw, 375px) / 375)` never scales down.

## Converting in JS

`useUnit()` returns the real pixels of one unit in the current scope and stays reactive to viewport changes:

```ts
import { useUnit } from '@antdv-next/mobile'

const { unit, designUnit, toPx, toUnits, designToPx } = useUnit()

toPx(44) // units -> pixels: 44 on a 375 screen, 88 on a 750 screen when scaling
toUnits(88) // pixels -> units
designToPx(88) // 88 on your design -> pixels
```

## Converting your own code

Write your own code in the `px` of your design and convert it with your build tool. The stylesheets of the library have no `px` left to convert, so it needs no separate design width.

PostCSS (`postcss-px-to-viewport`):

```js
// postcss.config.js
export default {
  plugins: {
    'postcss-px-to-viewport': { viewportWidth: 750, minPixelValue: 1 },
  },
}
```

Lightning CSS (Vite `css.transformer: 'lightningcss'`):

```ts
// vite.config.ts
export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      visitor: {
        Length(length) {
          // 750 design: 1px = 100vw / 750
          if (length.unit === 'px' && Math.abs(length.value) > 1)
            return { unit: 'vw', value: length.value / 7.5 }
        },
      },
    },
  },
})
```
