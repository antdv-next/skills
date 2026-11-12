# Grid gutter

Set the spacing between columns with `gutter`; the array form `[horizontal, vertical]` also sets the spacing between rows after wrapping.

## Source

```vue
<template>
  <div class="label">
    Horizontal gutter :gutter="12"
  </div>
  <am-row :gutter="12">
    <am-col v-for="i in 3" :key="i" :span="8">
      <div class="cell">
        8
      </div>
    </am-col>
  </am-row>
  <div class="label">
    Horizontal and vertical gutter :gutter="[12, 12]"
  </div>
  <am-row :gutter="[12, 12]">
    <am-col v-for="i in 6" :key="i" :span="8">
      <div class="cell">
        8
      </div>
    </am-col>
  </am-row>
</template>

<style scoped>
.label {
  margin: 12px 0 8px;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size-sm);
}

.label:first-child {
  margin-top: 0;
}

.cell {
  padding: 12px 0;
  color: var(--am-color-text-light-solid);
  font-size: var(--am-font-size);
  text-align: center;
  background: var(--am-color-primary);
  border-radius: var(--am-border-radius-sm);
}
</style>
```
