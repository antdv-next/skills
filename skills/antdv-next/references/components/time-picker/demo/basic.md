# 基本

## Description (zh-CN)

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { shallowRef } from 'vue'

dayjs.extend(customParseFormat)

const value = shallowRef()

function onChange(time: any, timeString: string) {
  console.log(time, timeString)
}
</script>

<template>
  <a-time-picker
    v-model:value="value"
    @change="onChange"
  />
</template>
```
