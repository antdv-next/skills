# Fixed at the bottom

`fixed` is on by default and fixes the bar at the bottom of the viewport, `placeholder` keeps a placeholder of the same height in the document flow so content is not covered, and `safeArea` is on by default to adapt to the bottom safe area. The demo simulates the viewport with a container that has a `transform`.

## Source

```vue
<script setup lang="ts">
import { ShopOutlined, ShoppingCartOutlined } from '@antdv-next/icons'
import { h } from 'vue'
</script>

<template>
  <div class="viewport">
    <div class="scroller">
      <p v-for="i in 12" :key="i" class="row">
        Content {{ i }}
      </p>
      <am-action-bar placeholder>
        <am-action-bar-icon :icon="() => h(ShopOutlined)" text="Shop" />
        <am-action-bar-icon :icon="() => h(ShoppingCartOutlined)" text="Cart" :badge="2" />
        <am-action-bar-button color="warning">
          Add to cart
        </am-action-bar-button>
        <am-action-bar-button color="danger">
          Buy now
        </am-action-bar-button>
      </am-action-bar>
    </div>
  </div>
</template>

<style scoped>
/* transform makes inner fixed elements position relative to this container */
.viewport {
  height: 240px;
  overflow: hidden;
  transform: translateZ(0);
}

.scroller {
  height: 100%;
  overflow-y: auto;
}

.row {
  margin: 0;
  padding: 12px 16px;
  color: var(--am-color-text-secondary);
}
</style>
```
