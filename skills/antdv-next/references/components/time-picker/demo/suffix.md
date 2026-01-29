# 前后缀

## Description (zh-CN)

自定义前缀 `prefix` 和后缀图标 `suffixIcon`。

## Source

```vue
<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const defaultOpenValue = dayjs('00:00:00', 'HH:mm:ss')

function onChange(time: any, timeString: string) {
  console.log(time, timeString)
}
</script>

<template>
  <a-space vertical :size="12">
    <a-time-picker
      :default-open-value="defaultOpenValue"
      @change="onChange"
    >
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </a-time-picker>
    <a-time-picker>
      <template #prefix>
        <SmileOutlined />
      </template>
    </a-time-picker>
    <a-time-range-picker>
      <template #prefix>
        <SmileOutlined />
      </template>
    </a-time-range-picker>
  </a-space>
</template>
```
