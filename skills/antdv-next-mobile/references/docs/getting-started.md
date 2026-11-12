---
title: Getting Started
---

## Installation

```bash
pnpm add @antdv-next/mobile
```

## Full import

```ts
import AntdvMobile from '@antdv-next/mobile'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(AntdvMobile).mount('#app')
```

Components are registered globally with the `am-` prefix. Styles are imported together with the components, so there is no CSS file to import separately.

```vue
<template>
  <am-button type="primary" block @click="open = true">
    Open popup
  </am-button>
  <am-popup v-model:open="open" round closable>
    <div style="padding: 24px">Hello Antdv Mobile</div>
  </am-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>
```

## Import on demand

Just import the components you need; the build tool tree-shakes unused code and styles automatically.

```vue
<script setup lang="ts">
import { Button, message } from '@antdv-next/mobile'
</script>

<template>
  <Button type="primary" @click="message.success('Success')">
    Submit
  </Button>
</template>
```

If your build pipeline does not handle CSS imports inside packages (some SSR setups, for example), import the full stylesheet manually instead:

```ts
import '@antdv-next/mobile/style.css'
```

## Auto import

With [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) you can write `<am-button>` in templates without global registration or manual imports. The resolver ships with `@antdv-next/mobile`, so its component list always matches the installed version.

```bash
pnpm add -D unplugin-vue-components
```

```ts
// vite.config.ts
import { AntdvNextMobileResolver } from '@antdv-next/mobile/resolver'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntdvNextMobileResolver()],
    }),
  ],
})
```

Webpack, Rspack, Rollup and esbuild work the same way: replace `unplugin-vue-components/vite` with the matching entry.

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| exclude | Components or icons that should not be imported automatically. Matches the tag name (`AmButton`) or the export name (`Button`) | `string \| RegExp \| (string \| RegExp)[]` | - |
| resolveIcons | Also import the icons of `@antdv-next/icons` (`<SearchOutlined />`) | `boolean` | `false` |

```ts
AntdvNextMobileResolver({
  resolveIcons: true,
  exclude: ['AmButton', /^AmInput/],
})
```

Static methods such as `message` and `Modal.confirm` are not template components and still have to be imported manually.

## Viewport and safe area

Set the viewport in `index.html`; `viewport-fit=cover` enables safe area support:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
/>
```

Components use `px` units by default and are drawn for a 375px design draft. When proportional scaling is needed, convert with a plugin such as `postcss-px-to-viewport`, or adjust the size variables directly (see [Customize Theme](customize-theme.md)).

## Static methods

Methods such as `message`, `Toast`, `Modal.confirm`, `ActionSheet.show` and `ImagePreview.show` can be called anywhere. They render into separate nodes and read the global theme and locale through `ConfigProvider.config`:

```ts
import { ConfigProvider, theme } from '@antdv-next/mobile'
import enUS from '@antdv-next/mobile/locale/en_US'

ConfigProvider.config({
  theme: { algorithm: theme.darkAlgorithm, token: { colorPrimary: '#00b96b' } },
  locale: enUS,
})
```

## TypeScript

The `Props`, `Emits` and `Slots` types of every component can be imported directly:

```ts
import type { ButtonProps, PopupProps, ThemeConfig } from '@antdv-next/mobile'
```
