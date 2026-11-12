# Button style

Use `Radio.Button` or `optionType="button"` to render a button-style radio group; `buttonStyle` can be `outline` or `solid`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const a = ref('day')
const b = ref('week')
const options = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year', disabled: true },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-radio-group v-model:value="a">
      <am-radio-button value="day">
        Day
      </am-radio-button>
      <am-radio-button value="week">
        Week
      </am-radio-button>
      <am-radio-button value="month">
        Month
      </am-radio-button>
    </am-radio-group>
    <am-radio-group v-model:value="b" :options="options" option-type="button" button-style="solid" />
  </am-flex>
</template>
```
