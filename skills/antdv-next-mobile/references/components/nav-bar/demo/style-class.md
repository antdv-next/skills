# Custom style

Override the `--am-nav-bar-*` component variables, or use `classes` / `styles` to customize each semantic part.

## Source

```vue
<script setup lang="ts">
import { ShareAltOutlined } from '@antdv-next/icons'
</script>

<template>
  <div class="stack">
    <am-nav-bar class="brand-bar" title="Brand color" back="Back" :bordered="false">
      <template #right>
        <ShareAltOutlined style="font-size: 20px" />
      </template>
    </am-nav-bar>
    <am-nav-bar
      title="Semantic styles"
      sub-title="styles.title / styles.subTitle"
      :styles="{ title: { alignItems: 'flex-start', maxWidth: 'none', flex: 2 }, subTitle: { color: 'var(--am-color-primary)' } }"
    />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand-bar {
  --am-nav-bar-height: 52px;
  --am-nav-bar-background: var(--am-color-primary);
  --am-nav-bar-color: var(--am-color-text-light-solid);
}
</style>
```
