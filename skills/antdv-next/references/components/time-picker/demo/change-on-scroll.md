# Change on scroll

## Description (en-US)

Use `changeOnScroll` and `needConfirm` to change the value when scrolling.

## Source

```vue
<script setup lang="ts">
import type { TimePickerEmits } from 'antdv-next'

const onChange: TimePickerEmits['change'] = (time, timeString) => {
  console.log(time, timeString)
}
</script>

<template>
  <a-time-picker change-on-scroll :need-confirm="false" @change="onChange" />
</template>
```
