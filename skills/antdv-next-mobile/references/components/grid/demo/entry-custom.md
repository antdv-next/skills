# Span and custom content

`span` lets a `GridItem` take several columns, and its default slot replaces the whole content.

## Source

```vue
<script setup lang="ts">
import { GiftOutlined, ThunderboltOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-grid :columns="4" :gap="8" class="custom">
    <am-grid-item :span="2">
      <div class="promo">
        <div class="promo-title">
          Flash sale
        </div>
        <div class="promo-desc">
          Ends in 2 hours
        </div>
      </div>
    </am-grid-item>
    <am-grid-item title="Deals" badge="New">
      <template #icon>
        <ThunderboltOutlined />
      </template>
    </am-grid-item>
    <am-grid-item title="Gifts" :badge="12">
      <template #icon>
        <GiftOutlined />
      </template>
    </am-grid-item>
  </am-grid>
</template>

<style scoped>
.custom {
  --am-grid-background: var(--am-color-fill-quaternary);
  --am-grid-item-radius: var(--am-border-radius);
  --am-grid-icon-color: var(--am-color-primary);
}

.promo {
  align-self: stretch;
  padding-inline: var(--am-padding-xs);
}

.promo-title {
  color: var(--am-color-text-heading);
  font-weight: var(--am-font-weight-strong);
  font-size: var(--am-font-size);
}

.promo-desc {
  color: var(--am-color-text-secondary);
}
</style>
```
