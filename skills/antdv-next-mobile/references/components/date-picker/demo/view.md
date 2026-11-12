# Inline view DatePickerView

`DatePickerView` (i.e. `DatePicker.View`) is the wheel view without the trigger and the popup. It can be embedded directly in the page, and its value updates in real time while scrolling.

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const value = ref(dayjs())
</script>

<template>
  <am-date-picker-view v-model:value="value" :visible-item-count="3" />
  <div class="demo-result">
    {{ value.format('YYYY-MM-DD') }}
  </div>
</template>

<style scoped>
.demo-result {
  margin-top: 12px;
  color: var(--am-color-text-secondary);
  font-size: 14px;
  text-align: center;
}
</style>
```
