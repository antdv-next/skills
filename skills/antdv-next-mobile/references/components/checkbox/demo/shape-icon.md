# Shape and custom icon

`shape="round"` uses a round check icon; the `icon` slot (or prop) fully customizes the icon, and the slot params include `checked` and `indeterminate`.

## Source

```vue
<script setup lang="ts">
import { HeartFilled, HeartOutlined, StarFilled, StarOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const liked = ref(true)
const tags = ref(['a'])
</script>

<template>
  <am-flex vertical gap="small">
    <am-checkbox shape="round" default-checked>
      Round checkbox
    </am-checkbox>
    <am-checkbox v-model:checked="liked">
      <template #icon="{ checked }">
        <HeartFilled v-if="checked" style="color: var(--am-color-error)" />
        <HeartOutlined v-else style="color: var(--am-color-text-tertiary)" />
      </template>
      {{ liked ? 'Liked' : 'Like' }}
    </am-checkbox>
    <am-checkbox-group v-model:value="tags" :options="[{ label: 'Favorite A', value: 'a' }, { label: 'Favorite B', value: 'b' }]">
      <template #icon="{ checked }">
        <StarFilled v-if="checked" style="color: var(--am-color-warning)" />
        <StarOutlined v-else style="color: var(--am-color-text-tertiary)" />
      </template>
    </am-checkbox-group>
  </am-flex>
</template>
```
