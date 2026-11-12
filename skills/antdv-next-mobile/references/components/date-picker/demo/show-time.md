# Date and time

`showTime` adds time columns after the date. Pass an object to decide which columns are shown through `format`, and to set the steps or the 12-hour clock.

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const full = ref(dayjs())
const short = ref(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-date-picker v-model:value="full" show-time title="To the second" />
    <am-date-picker
      v-model:value="short"
      :show-time="{ format: 'HH:mm', minuteStep: 15 }"
      format="MM-DD HH:mm"
      title="Booking time"
      placeholder="Please select a time"
    />
  </am-flex>
</template>
```
