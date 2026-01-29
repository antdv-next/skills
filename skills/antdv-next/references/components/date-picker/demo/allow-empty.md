# 允许留空

## Description (zh-CN)

在范围选择时，可以允许留空。这对于需要保留“至今”日期项颇为有用。

## Source

```vue
<script setup lang="ts">
function handleChange(date: any, dateString: string | string[]) {
  console.log(date, dateString)
}
</script>

<template>
  <a-range-picker
    :placeholder="['Start Date', 'Till Now']"
    :allow-empty="[false, true]"
    @change="handleChange"
  />
</template>
```
