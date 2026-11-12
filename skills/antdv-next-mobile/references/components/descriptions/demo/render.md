# Custom render

`label` / `content` can be render functions, or use the `labelRender` / `contentRender` slots to customize them all in one place.

## Source

```vue
<script setup lang="ts">
import { CheckCircleFilled } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  { key: 'name', label: 'UserName', content: 'Zhou Maomao' },
  {
    key: 'status',
    label: 'Status',
    content: () => h('span', { style: 'color: var(--am-color-success)' }, [h(CheckCircleFilled), ' Verified']),
  },
  { key: 'phone', label: 'Telephone', content: '18100000000' },
]

function mask(value: unknown) {
  return String(value).replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
</script>

<template>
  <am-descriptions title="Custom Render" :items="items">
    <template #contentRender="{ item, value }">
      <template v-if="item.key === 'phone'">
        {{ mask(value) }}
      </template>
    </template>
  </am-descriptions>
</template>
```
