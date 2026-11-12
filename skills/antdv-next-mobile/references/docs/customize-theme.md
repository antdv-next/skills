---
title: Customize Theme
---

Theming is implemented entirely with CSS variables; no styles are generated at runtime. Variable names map one-to-one to the Design Tokens of Antdv Next: `colorPrimary` maps to `--am-color-primary`, `fontSizeLG` maps to `--am-font-size-lg`.

Click the palette in the top-right corner of the page to switch the primary color, border radius and algorithm in real time; the simulator on the right updates in sync.

## Use ConfigProvider

The usage is the same as on PC:

```vue
<script setup lang="ts">
import { theme } from '@antdv-next/mobile'
</script>

<template>
  <am-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
      token: { colorPrimary: '#00b96b', borderRadius: 12 },
      components: { Button: { height: 44 } },
    }"
  >
    <App />
  </am-config-provider>
</template>
```

| Field | Description | Type |
| --- | --- | --- |
| algorithm | Theme algorithm; pass an array to combine several | `theme.defaultAlgorithm \| theme.darkAlgorithm \| theme.compactAlgorithm` or `'default' \| 'dark' \| 'compact'` |
| token | Global tokens, with the same keys as Antdv Next | `AliasToken` |
| components | Component tokens; `{ Button: { height: 44 } }` is written as `--am-button-height: 44px` | `Record<string, ComponentToken>` |
| inherit | Whether to inherit the theme of the parent ConfigProvider | `boolean`, default `true` |

`ConfigProvider` can be nested; the inner one only needs to declare the differences. Popups mounted to `body` (Popup, Modal, Picker, etc.) automatically carry the theme of their `ConfigProvider`.

## Global switching

If you want the page background, `body` and all content to switch together, use `applyTheme` to write the theme onto `<html>`:

```ts
import { applyTheme, theme } from '@antdv-next/mobile'

// Switch to dark + a green primary color; the return value reverts it
const revert = applyTheme({
  algorithm: theme.darkAlgorithm,
  token: { colorPrimary: '#00b96b' },
})
```

You can also switch the algorithm with an attribute, without writing any JS:

```html
<html data-am-theme="dark compact"></html>
```

## Override CSS variables directly

```css
:root {
  --am-color-primary: #7c3aed;
  --am-border-radius: 12px;
  --am-control-height: 44px;
}

/* Only affects the buttons inside a certain area */
.checkout .am-button {
  --am-button-height: 52px;
  --am-button-border-radius: 26px;
}
```

Variables come in two layers:

- **Seed variables**: `--am-color-primary`, `--am-color-text-base`, `--am-font-size` and so on, which hold direct values.
- **Derived variables**: `--am-color-primary-bg`, `--am-color-text-secondary`, `--am-color-border` and so on, which are computed from the seed variables with `color-mix()`.

So changing just `--am-color-primary` also changes the pressed state, the light background and the border color.

> Derived variables are computed on `:root` and on every `ConfigProvider`. If you override a seed variable on an ordinary element and want the derived colors to follow, add the `am-theme` class to it, or simply use `ConfigProvider`.

## Common variables

| Variable | Token | Default |
| --- | --- | --- |
| `--am-color-primary` | colorPrimary | `#1677ff` |
| `--am-color-success` | colorSuccess | `#52c41a` |
| `--am-color-warning` | colorWarning | `#faad14` |
| `--am-color-error` | colorError | `#ff4d4f` |
| `--am-color-text-base` | colorTextBase | `#000` |
| `--am-color-bg-base` | colorBgBase | `#fff` |
| `--am-color-text` | colorText | Text color 88% |
| `--am-color-text-secondary` | colorTextSecondary | Text color 65% |
| `--am-color-bg-container` | colorBgContainer | Container background |
| `--am-color-bg-layout` | colorBgLayout | Page background |
| `--am-color-border` | colorBorder | Border color |
| `--am-font-size` | fontSize | `14px` |
| `--am-control-height` | controlHeight | `40px` |
| `--am-border-radius` | borderRadius | `8px` |
| `--am-padding` | padding | `16px` |

See `style/tokens.css` in the source for the full list. The variables of each component are listed in the "Design Token" section of its documentation.

## Read in JS

```ts
import { theme } from '@antdv-next/mobile'

const { token, isDark, cssVar } = theme.useToken()

cssVar('colorPrimary') // 'var(--am-color-primary)'
```
