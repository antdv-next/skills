# Color format

`format` (supports `v-model:format`) decides whether the inputs of the panel and the trigger text use HEX, HSB or RGB; `disabledFormat` hides the switch. `valueFormat` decides the string format `v-model:value` receives; without it you get a `Color` object.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const format = ref<'hex' | 'hsb' | 'rgb'>('rgb')
const options = ['hex', 'hsb', 'rgb']

const hex = ref('#1677ff')
const rgb = ref('rgb(82,196,26)')
const hsb = ref('hsb(27, 91%, 98%)')
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented v-model:value="format" :options="options" block />
    <am-color-picker v-model:format="format" default-value="#1677ff" show-text />
    <am-color-picker default-value="#722ed1" default-format="hsb" disabled-format show-text />
    <am-flex vertical gap="small" class="demo-values">
      <am-flex gap="small" align="center">
        <am-color-picker v-model:value="hex" value-format="hex" size="small" />
        <span>hex: {{ hex }}</span>
      </am-flex>
      <am-flex gap="small" align="center">
        <am-color-picker v-model:value="rgb" value-format="rgb" size="small" />
        <span>rgb: {{ rgb }}</span>
      </am-flex>
      <am-flex gap="small" align="center">
        <am-color-picker v-model:value="hsb" value-format="hsb" size="small" />
        <span>hsb: {{ hsb }}</span>
      </am-flex>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.demo-values {
  color: var(--am-color-text-secondary);
  font-size: 13px;
}
</style>
```
