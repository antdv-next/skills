# Expand and collapse

`expandable` shows an "Expand" button when the text is truncated; set it to `'collapsible'` to allow collapsing again. `symbol` or the `ellipsisSymbol` slot customizes the button content.

## Source

```vue
<script setup lang="ts">
import { DownOutlined, UpOutlined } from '@antdv-next/icons'

const text = 'Enterprise products at Ant form a large and complex system. They are huge in scale and rich in features, and they change frequently, so design and development have to respond quickly. Such products also contain many similar pages and components, which can be abstracted into stable and highly reusable content. With the trend of commercialization, more and more enterprise products demand a better user experience.'
</script>

<template>
  <am-typography-paragraph :ellipsis="{ rows: 2, expandable: true }">
    {{ text }}
  </am-typography-paragraph>
  <am-typography-paragraph :ellipsis="{ rows: 3, expandable: 'collapsible' }">
    {{ text }}
  </am-typography-paragraph>
  <am-typography-paragraph
    :ellipsis="{ rows: 2, expandable: 'collapsible', symbol: (expanded: boolean) => (expanded ? 'Collapse' : 'Read more') }"
  >
    {{ text }}
  </am-typography-paragraph>
  <am-typography-paragraph :ellipsis="{ rows: 2, expandable: 'collapsible' }" type="secondary">
    {{ text }}
    <template #ellipsisSymbol="{ expanded }">
      <UpOutlined v-if="expanded" />
      <DownOutlined v-else />
    </template>
  </am-typography-paragraph>
  <am-typography-text :ellipsis="{ expandable: true }" style="width: 100%">
    Single-line text can be expanded too: {{ text }}
  </am-typography-text>
</template>
```
