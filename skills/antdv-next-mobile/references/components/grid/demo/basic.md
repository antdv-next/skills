# Basic grid

Create a basic grid with `Row` and `Col`; a row is divided evenly into 24 cells.

## Source

```vue
<template>
  <am-row>
    <am-col :span="24">
      <div class="cell">
        24
      </div>
    </am-col>
  </am-row>
  <am-row>
    <am-col :span="12">
      <div class="cell">
        12
      </div>
    </am-col>
    <am-col :span="12">
      <div class="cell alt">
        12
      </div>
    </am-col>
  </am-row>
  <am-row>
    <am-col v-for="i in 3" :key="i" :span="8">
      <div class="cell" :class="{ alt: i % 2 === 0 }">
        8
      </div>
    </am-col>
  </am-row>
  <am-row>
    <am-col v-for="i in 4" :key="i" :span="6">
      <div class="cell" :class="{ alt: i % 2 === 0 }">
        6
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
  font-size: var(--am-font-size);
  text-align: center;
  background: var(--am-color-primary);
}

.cell.alt {
  background: var(--am-color-primary-hover);
}
</style>
```
