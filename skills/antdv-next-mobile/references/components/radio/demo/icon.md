# Custom icon

Customize the icon with the `icon` slot; the `icon` slot of `Radio.Group` applies to all options in the group.

## Source

```vue
<script setup lang="ts">
import { CheckCircleFilled, SmileFilled, SmileOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const mood = ref('good')
const plan = ref('pro')
</script>

<template>
  <am-flex vertical gap="middle">
    <am-radio-group v-model:value="mood" :options="[{ label: 'Happy', value: 'good' }, { label: 'So-so', value: 'normal' }]">
      <template #icon="{ checked }">
        <SmileFilled v-if="checked" style="color: var(--am-color-warning)" />
        <SmileOutlined v-else style="color: var(--am-color-text-tertiary)" />
      </template>
    </am-radio-group>
    <am-radio-group v-model:value="plan" vertical>
      <am-radio value="free">
        <template #icon="{ checked }">
          <CheckCircleFilled :style="{ color: checked ? 'var(--am-color-success)' : 'var(--am-color-fill)' }" />
        </template>
        Free
      </am-radio>
      <am-radio value="pro">
        <template #icon="{ checked }">
          <CheckCircleFilled :style="{ color: checked ? 'var(--am-color-success)' : 'var(--am-color-fill)' }" />
        </template>
        Pro
      </am-radio>
    </am-radio-group>
  </am-flex>
</template>
```
