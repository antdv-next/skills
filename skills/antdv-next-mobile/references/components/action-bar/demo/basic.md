# Basic usage

Put `ActionBarIcon` on the left and `ActionBarButton` on the right. Adjacent buttons join into one pill, a single button is rounded on both ends. Every demo in this page sets `:fixed="false"` so the bar does not stick to the bottom of the viewport.

## Source

```vue
<script setup lang="ts">
import { CustomerServiceOutlined, ShopOutlined, ShoppingCartOutlined, StarOutlined } from '@antdv-next/icons'
import { h } from 'vue'

function onClick(name: string) {
  console.log(name)
}
</script>

<template>
  <am-action-bar :fixed="false" :safe-area="false">
    <am-action-bar-icon :icon="() => h(CustomerServiceOutlined)" text="Chat" @click="onClick('chat')" />
    <am-action-bar-icon :icon="() => h(ShopOutlined)" text="Shop" @click="onClick('shop')" />
    <am-action-bar-icon :icon="() => h(ShoppingCartOutlined)" text="Cart" @click="onClick('cart')" />
    <am-action-bar-button color="warning" @click="onClick('add')">
      Add to cart
    </am-action-bar-button>
    <am-action-bar-button color="danger" @click="onClick('buy')">
      Buy now
    </am-action-bar-button>
  </am-action-bar>

  <am-action-bar :fixed="false" :safe-area="false" class="gap">
    <am-action-bar-icon :icon="() => h(StarOutlined)" text="Save" />
    <am-action-bar-icon :icon="() => h(ShoppingCartOutlined)" text="Cart" />
    <am-action-bar-button>
      Buy now
    </am-action-bar-button>
  </am-action-bar>
</template>

<style scoped>
.gap {
  margin-top: 12px;
}
</style>
```
