# component-token

## Description (zh-CN)

Component Token Debug.

## Source

```vue
<script setup lang="ts">
import type { MentionsProps } from 'antdv-next'
import { ref } from 'vue'

const value = ref('@')

const options: MentionsProps['options'] = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
]
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Mentions: {
          dropdownHeight: 500,
          controlItemWidth: 300,
          zIndexPopup: 1000,
        },
      },
    }"
  >
    <a-mentions v-model:value="value" style="width: 100%" :options="options" />
  </a-config-provider>
</template>
```
