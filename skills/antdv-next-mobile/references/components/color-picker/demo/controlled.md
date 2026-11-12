# Controlled and events

Controlled with `v-model:value` and `v-model:open`. `select` fires while dragging (not committed), `changeComplete` when the finger is lifted, and `change` only after tapping "OK".

## Source

```vue
<script setup lang="ts">
import type { Color } from '@antdv-next/mobile'
import { ref } from 'vue'

const color = ref('#1677ff')
const open = ref(false)
const pending = ref('-')
const completed = ref('-')
const changed = ref('-')

function onSelect(value: Color) {
  pending.value = value.toHexString()
}

function onChangeComplete(value: Color) {
  completed.value = value.toHexString()
}

function onChange(value: Color, css: string) {
  changed.value = css
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="middle" align="center">
      <am-color-picker
        v-model:value="color"
        v-model:open="open"
        value-format="hex"
        show-text
        @select="onSelect"
        @change-complete="onChangeComplete"
        @change="onChange"
      />
      <am-button size="small" @click="open = true">
        Open
      </am-button>
      <am-button size="small" @click="color = '#f5222d'">
        Set red
      </am-button>
    </am-flex>
    <div class="demo-log">
      <div>select: {{ pending }}</div>
      <div>changeComplete: {{ completed }}</div>
      <div>change: {{ changed }}</div>
    </div>
  </am-flex>
</template>

<style scoped>
.demo-log {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
  line-height: 1.8;
}
</style>
```
