# Gradients

`color` is a solid color string or an array of gradient stops. `percent` uses the `0 ~ 100` range; the component reserves the space for the transparent tail by itself.

## Source

```vue
<script setup lang="ts">
import type { BorderBeamGradient } from '@antdv-next/mobile'
import { computed, ref } from 'vue'

interface Preset {
  name: string
  usage: string
  color: BorderBeamGradient
}

const presets: Preset[] = [
  {
    name: 'Ocean',
    usage: 'A calm blue-green accent for data views and cloud tooling.',
    color: [
      { color: '#1677ff', percent: 0 },
      { color: '#36cfc9', percent: 52 },
      { color: '#95de64', percent: 100 },
    ],
  },
  {
    name: 'Sunset',
    usage: 'A warm highlight for upgrade prompts and featured cards.',
    color: [
      { color: '#ff7a45', percent: 0 },
      { color: '#ff4d4f', percent: 49 },
      { color: '#ff85c0', percent: 100 },
    ],
  },
  {
    name: 'Aurora',
    usage: 'A vivid cool beam for AI assistants and automation panels.',
    color: [
      { color: '#7c3aed', percent: 0 },
      { color: '#06b6d4', percent: 57 },
      { color: '#67e8f9', percent: 100 },
    ],
  },
]

const current = ref(presets[0].name)
const preset = computed(() => presets.find(item => item.name === current.value) ?? presets[0])
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented v-model:value="current" block :options="presets.map(item => item.name)" />
    <am-border-beam :color="preset.color">
      <am-card :title="preset.name">
        <am-flex vertical gap="small">
          <span>{{ preset.usage }}</span>
          <am-flex gap="small" wrap>
            <am-tag v-for="stop in preset.color" :key="stop.color" :color="stop.color">
              {{ stop.color }} · {{ stop.percent }}%
            </am-tag>
          </am-flex>
        </am-flex>
      </am-card>
    </am-border-beam>
    <am-border-beam color="#ff4d4f">
      <am-card title="Solid color">
        A single color string fades into the transparent tail.
      </am-card>
    </am-border-beam>
  </am-flex>
</template>
```
