# Vertical direction

`vertical` (or `orientation="vertical"`) arranges the options vertically.

## Source

```vue
<script setup lang="ts">
import type { SegmentedOption } from '@antdv-next/mobile'
import { AppstoreOutlined, BarsOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const options: SegmentedOption[] = [
  { label: 'List view', value: 'list', icon: () => h(BarsOutlined) },
  { label: 'Grid view', value: 'grid', icon: () => h(AppstoreOutlined) },
  { label: 'Member view', value: 'member', icon: () => h(UserOutlined) },
]
</script>

<template>
  <am-flex gap="large" align="flex-start">
    <am-segmented vertical :options="options" />
    <am-segmented vertical shape="round" :options="['Top', 'Middle', 'Bottom']" />
  </am-flex>
</template>
```
