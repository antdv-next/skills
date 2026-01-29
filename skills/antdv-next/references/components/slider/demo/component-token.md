# component-token

## Description (zh-CN)

Component Token Debug.

## Source

```vue
<script setup lang="ts">
import { h, ref } from 'vue'

const value = ref(30)
const valueRange = ref([20, 50])
const valueVertical = ref(30)
const valueVerticalRange = ref([20, 50])
const valueVerticalMarks = ref([26, 37])

const style = {
  display: 'inline-block',
  height: '300px',
  marginInlineStart: '70px',
}

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: { color: '#f50' },
    label: h('strong', '100°C'),
  },
}
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Slider: {
          controlSize: 20,
          railSize: 4,
          handleSize: 22,
          handleSizeHover: 18,
          dotSize: 8,
          handleLineWidth: 6,
          handleLineWidthHover: 2,
          railBg: '#9f3434',
          railHoverBg: '#8d2424',
          trackBg: '#b0b0ef',
          trackHoverBg: '#c77195',
          handleColor: '#e6f6a2',
          handleActiveColor: '#d22bc4',
          dotBorderColor: '#303030',
          dotActiveBorderColor: '#918542',
          trackBgDisabled: '#1a1b80',
        },
      },
    }"
  >
    <a-slider v-model:value="value" disabled />
    <a-slider v-model:value="valueRange" :range="{ draggableTrack: true }" />
    <div :style="style">
      <a-slider v-model:value="valueVertical" vertical />
    </div>
    <div :style="style">
      <a-slider v-model:value="valueVerticalRange" vertical range :step="10" />
    </div>
    <div :style="style">
      <a-slider v-model:value="valueVerticalMarks" vertical range :marks="marks" />
    </div>
  </a-config-provider>
</template>
```
