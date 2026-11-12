# Badge and disabled

A badge is shown when `badge` is a number or text, and a red dot when it is `true`. `disabled` disables an icon action, and the icon can be customized with the `icon` slot.

## Source

```vue
<script setup lang="ts">
import { CustomerServiceOutlined, ShopOutlined, ShoppingCartOutlined, StarFilled } from '@antdv-next/icons'
import { h, ref } from 'vue'

const count = ref(5)
const saved = ref(true)
</script>

<template>
  <am-action-bar :fixed="false" :safe-area="false">
    <am-action-bar-icon :icon="() => h(CustomerServiceOutlined)" text="Chat" badge />
    <am-action-bar-icon :icon="() => h(ShoppingCartOutlined)" text="Cart" :badge="count" />
    <am-action-bar-icon :icon="() => h(ShopOutlined)" text="Shop" badge="new" disabled />
    <am-action-bar-icon :text="saved ? 'Saved' : 'Save'" @click="saved = !saved">
      <template #icon>
        <StarFilled :style="{ color: saved ? 'var(--am-color-warning)' : 'var(--am-color-text-quaternary)' }" />
      </template>
    </am-action-bar-icon>
    <am-action-bar-button color="danger" @click="count++">
      Add to cart
    </am-action-bar-button>
  </am-action-bar>
</template>
```
