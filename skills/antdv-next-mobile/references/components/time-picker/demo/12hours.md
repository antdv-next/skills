# 12-hour clock

`use12Hours` enables the 12-hour clock and adds an AM / PM column; you can also use a `format` with `h` and `a` directly.

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const value = ref(dayjs().hour(15).minute(30).second(0))
</script>

<template>
  <am-flex vertical gap="small">
    <am-time-picker v-model:value="value" use12-hours />
    <am-time-picker v-model:value="value" format="h:mm A" />
  </am-flex>
</template>
```
