# 响应式 maxTagCount

## Description (zh-CN)

多选下自动收缩标签的响应式场景。不建议在大型表单场景下使用，因为响应式计算有性能消耗。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const options = Array.from({ length: 26 }, (_, i) => {
  const value = (i + 10).toString(36) + (i + 10)
  return { label: `Long Label: ${value}`, value }
})

const value = shallowRef(['a10', 'c12', 'h17', 'j19', 'k20'])
</script>

<template>
  <a-space vertical style="width: 100%">
    <a-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      :options="options"
      placeholder="Select Item..."
      max-tag-count="responsive"
    />
    <a-select
      mode="multiple"
      style="width: 100%"
      disabled
      :options="options"
      placeholder="Select Item..."
      max-tag-count="responsive"
    />
    <a-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      :options="options"
      placeholder="Select Item..."
      max-tag-count="responsive"
    >
      <template #maxTagPlaceholder="omittedValues">
        <a-tooltip>
          <template #title>
            {{ omittedValues.map((v: any) => v.label).join(', ') }}
          </template>
          <span>Hover Me</span>
        </a-tooltip>
      </template>
    </a-select>
  </a-space>
</template>
```
