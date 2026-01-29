# 三种大小

## Description (zh-CN)

我们为 <Segmented /> 组件定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

## Source

```vue
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const data = reactive(['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'])
const value = ref(data[0])
const value2 = ref(data[0])
const value3 = ref(data[0])
</script>

<template>
  <a-segmented v-model:value="value" :options="data" size="large" />
  <br>
  <br>
  <a-segmented v-model:value="value2" :options="data" />
  <br>
  <br>
  <a-segmented v-model:value="value3" :options="data" size="small" />
</template>
```
