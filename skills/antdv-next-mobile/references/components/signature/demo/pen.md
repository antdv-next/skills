# Pen color and width

`penColor` sets the stroke color (follows the text color of the theme by default) and `lineWidth` sets the stroke width. Changes only apply to the strokes drawn afterwards.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const colors = [
  { label: 'Theme', value: '' },
  { label: 'Blue', value: '#1677ff' },
  { label: 'Red', value: '#f5222d' },
]
const color = ref('#1677ff')
const lineWidth = ref(4)
</script>

<template>
  <am-segmented v-model:value="color" :options="colors" block />
  <am-slider v-model:value="lineWidth" :min="1" :max="12" />
  <am-signature :pen-color="color || undefined" :line-width="lineWidth" placeholder="Sign here" />
</template>
```
