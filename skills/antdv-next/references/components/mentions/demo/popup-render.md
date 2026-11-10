# Customize Popup

## Description (en-US)

Customize the dropdown menu rendering via `popupRender`.

## Source

```vue
<script setup lang="ts">
import type { MentionsProps } from 'antdv-next'
import { theme } from 'antdv-next'

const { token } = theme.useToken()

const options: MentionsProps['options'] = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
  {
    value: 'yesmeck',
    label: 'yesmeck',
  },
]
</script>

<template>
  <a-mentions style="width: 100%" :options="options">
    <template #popupRender="menu">
      <div
        :style="{
          padding: `${token.paddingXS}px ${token.paddingSM}px`,
          fontWeight: token.fontWeightStrong,
          color: token.colorTextDescription,
        }"
      >
        Custom Header
      </div>
      <a-divider :style="{ margin: `${token.marginXXS}px 0` }" />
      <component :is="menu" />
    </template>
  </a-mentions>
</template>
```
