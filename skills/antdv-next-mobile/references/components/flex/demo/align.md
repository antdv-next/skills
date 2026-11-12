# Alignment

Set the alignment on the main axis with `justify` and on the cross axis with `align`.

## Source

```vue
<script setup lang="ts">
const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const
</script>

<template>
  <am-flex vertical gap="small">
    <template v-for="justify in justifyOptions" :key="justify">
      <div class="label">
        justify="{{ justify }}"
      </div>
      <am-flex class="box" :justify="justify" align="center">
        <span class="item" />
        <span class="item tall" />
        <span class="item" />
      </am-flex>
    </template>
  </am-flex>
</template>

<style scoped>
.label {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size-sm);
}

.box {
  height: 56px;
  padding: 0 8px;
  background: var(--am-color-fill-tertiary);
  border-radius: var(--am-border-radius);
}

.item {
  width: 48px;
  height: 24px;
  background: var(--am-color-primary);
  border-radius: var(--am-border-radius-sm);
}

.item.tall {
  height: 40px;
}
</style>
```
