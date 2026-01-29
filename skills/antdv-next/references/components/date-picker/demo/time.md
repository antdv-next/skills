# 日期时间选择

## Description (zh-CN)

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

## Source

```vue
<script setup lang="ts">
function handleOk(value: any) {
  console.log('onOk: ', value)
}

function handleChange(value: any, dateString: string | string[]) {
  console.log('Selected Time: ', value)
  console.log('Formatted Selected Time: ', dateString)
}
</script>

<template>
  <a-space vertical :size="12">
    <a-date-picker show-time @change="handleChange" @ok="handleOk" />
    <a-range-picker
      :show-time="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      @change="handleChange"
      @ok="handleOk"
    />
  </a-space>
</template>
```
