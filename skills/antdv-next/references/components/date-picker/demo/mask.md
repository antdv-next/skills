# 格式对齐

## Description (zh-CN)

输入格式对齐，通过键盘左右切换焦点。失去焦点时会尝试对齐到最后合法的日期。

## Source

```vue
<script setup lang="ts">
function handleChange(date: any, dateString: string | string[]) {
  console.log(date, dateString)
}
</script>

<template>
  <a-space vertical>
    <a-date-picker
      :format="{ format: 'YYYY-MM-DD', type: 'mask' }"
      @change="handleChange"
    />
    <a-date-picker
      :format="{ format: 'YYYY-MM-DD HH:mm:ss', type: 'mask' }"
      @change="handleChange"
    />
  </a-space>
</template>
```
