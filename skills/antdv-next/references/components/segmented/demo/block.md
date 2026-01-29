# block 分段选择器

## Description (zh-CN)

`block` 属性使其适合父元素宽度。

## Source

```vue
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const data = reactive([123, 456, 'longtext-longtext-longtext-longtext'])
const value = ref(data[0])
</script>

<template>
  <a-segmented v-model:value="value" block :options="data" />
</template>
```
