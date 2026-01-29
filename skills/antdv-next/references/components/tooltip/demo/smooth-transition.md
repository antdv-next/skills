# 平滑过渡

## Description (zh-CN)

通过 [ConfigProvider 全局配置](#config-provider-tooltip-unique) 实现同一时间只显示一个 Tooltip 的平滑过渡效果。

## Source

```vue
<script lang="ts" setup>
import SharedButton from './components/shared-button.vue'
</script>

<template>
  <a-config-provider
    :tooltip="{
      unique: true,
    }"
  >
    <a-flex vertical gap="small">
      <a-flex gap="small" justify="center">
        <SharedButton />
        <SharedButton />
      </a-flex>
      <a-flex gap="small" justify="center">
        <SharedButton placement="bottom" />
        <SharedButton placement="bottom" />
      </a-flex>
    </a-flex>
  </a-config-provider>
</template>
```
