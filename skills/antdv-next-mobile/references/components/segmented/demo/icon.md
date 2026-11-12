# Icon

Set an icon with the `icon` of an option; an option can show the icon only.

## Source

```vue
<script setup lang="ts">
import type { SegmentedOption } from '@antdv-next/mobile'
import { AppstoreOutlined, BarsOutlined, MoonOutlined, SunOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const viewOptions: SegmentedOption[] = [
  { label: 'List', value: 'list', icon: () => h(BarsOutlined) },
  { label: 'Grid', value: 'grid', icon: () => h(AppstoreOutlined) },
]

const themeOptions: SegmentedOption[] = [
  { value: 'light', icon: () => h(SunOutlined) },
  { value: 'dark', icon: () => h(MoonOutlined) },
]
</script>

<template>
  <am-flex gap="middle" align="center" wrap>
    <am-segmented :options="viewOptions" />
    <am-segmented :options="themeOptions" shape="round" />
  </am-flex>
</template>
```
