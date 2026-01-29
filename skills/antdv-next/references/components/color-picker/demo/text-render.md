# 渲染触发器文本

## Description (zh-CN)

渲染触发器的默认文本，`showText` 为 `true` 时生效。自定义文本时，可以使用 `showText` 为函数的方式，返回自定义的文本。

## Source

```vue
<script setup lang="ts">
import { DownOutlined } from '@antdv-next/icons'
import { shallowRef } from 'vue'

const value = shallowRef('#1677ff')
const customTextColor = shallowRef('#1677ff')
const iconColor = shallowRef('#1677ff')
const open = shallowRef(false)
</script>

<template>
  <a-space vertical>
    <a-color-picker v-model:value="value" show-text allow-clear />
    <a-color-picker v-model:value="customTextColor">
      <template #showText="{ color }">
        <span>Custom Text ({{ color?.toHexString?.() }})</span>
      </template>
    </a-color-picker>
    <a-color-picker
      v-model:value="iconColor"
      v-model:open="open"
    >
      <template #showText>
        <DownOutlined :rotate="open ? 180 : 0" style="color: rgba(0, 0, 0, 0.25)" />
      </template>
    </a-color-picker>
  </a-space>
</template>
```
