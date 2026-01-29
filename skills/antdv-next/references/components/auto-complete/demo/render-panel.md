# render-panel

## Description (zh-CN)

调试用组件，请勿直接使用。

## Source

```vue
<script setup lang="ts">
import { AutoComplete } from 'antdv-next'
import { ref } from 'vue'

const InternalAutoComplete = AutoComplete._InternalPanelDoNotUseOrYouWillBeFired

const open = ref(false)

const options = [
  { label: 'Jack', value: 'jack' },
  { label: 'Lucy', value: 'lucy' },
  { label: 'Disabled', value: 'disabled' },
  { label: 'Bamboo', value: 'bamboo' },
]
</script>

<template>
  <a-flex vertical align="start" gap="small">
    <a-switch v-model:checked="open" />
    <InternalAutoComplete
      default-value="lucy"
      style="width: 120px"
      :open="open"
      :options="options"
    />
  </a-flex>
</template>
```
