# Combination

Nest `Flex` to quickly build a common mobile card layout: an image on the left, and content justified to the top and bottom on the right.

## Source

```vue
<template>
  <am-flex gap="middle" class="product">
    <div class="cover" />
    <am-flex vertical justify="space-between" flex="1" :style="{ minWidth: 0 }">
      <div>
        <div class="title">
          @antdv-next/mobile custom T-shirt
        </div>
        <div class="desc">
          Cotton · Black · L
        </div>
      </div>
      <am-flex justify="space-between" align="center">
        <span class="price">¥ 99.00</span>
        <am-button type="primary" size="small" shape="round">
          Buy
        </am-button>
      </am-flex>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.cover {
  flex: none;
  width: 96px;
  height: 96px;
  background: linear-gradient(135deg, var(--am-color-primary-border), var(--am-color-primary));
  border-radius: var(--am-border-radius);
}

.title {
  overflow: hidden;
  color: var(--am-color-text);
  font-weight: 600;
  font-size: var(--am-font-size-lg);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.desc {
  margin-top: 4px;
  color: var(--am-color-text-tertiary);
  font-size: var(--am-font-size-sm);
}

.price {
  color: var(--am-color-error);
  font-weight: 600;
  font-size: var(--am-font-size-lg);
}
</style>
```
