# Flex stretch

The `flex` prop of `Col` makes fixed-width plus adaptive layouts possible: a number is a ratio, `'80px'` is a fixed width, and `'auto'` fills the remaining space.

## Source

```vue
<template>
  <am-row>
    <am-col :flex="2">
      <div class="cell">
        2 / 5
      </div>
    </am-col>
    <am-col :flex="3">
      <div class="cell alt">
        3 / 5
      </div>
    </am-col>
  </am-row>
  <am-row :wrap="false">
    <am-col flex="80px">
      <div class="cell">
        80px
      </div>
    </am-col>
    <am-col flex="auto">
      <div class="cell alt">
        auto
      </div>
    </am-col>
  </am-row>
  <am-row :wrap="false" :gutter="8">
    <am-col flex="none">
      <div class="cell pad">
        none
      </div>
    </am-col>
    <am-col flex="auto">
      <div class="cell alt">
        auto
      </div>
    </am-col>
    <am-col flex="60px">
      <div class="cell">
        60px
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

.cell.pad {
  padding-inline: 12px;
}
</style>
```
