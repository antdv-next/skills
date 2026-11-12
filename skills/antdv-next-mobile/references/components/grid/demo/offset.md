# Offset and order

`offset` shifts a column to the right by a number of cells, and `order` changes the display order of the columns.

## Source

```vue
<template>
  <am-row>
    <am-col :span="8">
      <div class="cell">
        8
      </div>
    </am-col>
    <am-col :span="8" :offset="8">
      <div class="cell">
        8 offset-8
      </div>
    </am-col>
  </am-row>
  <am-row>
    <am-col :span="12" :offset="6">
      <div class="cell">
        12 offset-6
      </div>
    </am-col>
  </am-row>
  <am-row>
    <am-col :span="8" :order="3">
      <div class="cell">
        1 · order-3
      </div>
    </am-col>
    <am-col :span="8" :order="2">
      <div class="cell alt">
        2 · order-2
      </div>
    </am-col>
    <am-col :span="8" :order="1">
      <div class="cell">
        3 · order-1
      </div>
    </am-col>
  </am-row>
</template>

<style scoped>
.am-row + .am-row {
  margin-top: 8px;
}

.cell {
  padding: 12px 0;
  color: var(--am-color-text-light-solid);
  font-size: var(--am-font-size-sm);
  text-align: center;
  background: var(--am-color-primary);
}

.cell.alt {
  background: var(--am-color-primary-hover);
}
</style>
```
