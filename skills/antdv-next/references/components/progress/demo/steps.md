# 步骤进度条

## Description (zh-CN)

带步骤的进度条。

## Source

```vue
<script setup lang="ts">
import { green, red } from '@ant-design/colors'
</script>

<template>
  <a-flex gap="small" vertical>
    <a-progress :percent="50" :steps="3" />
    <a-progress :percent="30" :steps="5" />
    <a-progress :percent="100" :steps="5" size="small" :stroke-color="green[6]" />
    <a-progress :percent="60" :steps="5" :stroke-color="[green[6]!, green[6]!, red[5]!]" />
  </a-flex>
</template>
```
