# Prefix and suffix

Add an icon or unit before or after the value through the `prefix` and `suffix` props or slots.

## Source

```vue
<script setup lang="ts">
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-flex gap="large" wrap>
    <am-statistic title="Likes" :value="1128">
      <template #prefix>
        <LikeOutlined />
      </template>
    </am-statistic>
    <am-statistic title="Unresolved" :value="93" suffix="/ 100" />
    <am-statistic title="Daily" :value="11.28" :precision="2" suffix="%" :value-style="{ color: '#cf1322' }">
      <template #prefix>
        <ArrowUpOutlined />
      </template>
    </am-statistic>
    <am-statistic title="Weekly" :value="9.3" :precision="2" suffix="%" :value-style="{ color: '#3f8600' }">
      <template #prefix>
        <ArrowDownOutlined />
      </template>
    </am-statistic>
  </am-flex>
</template>
```
