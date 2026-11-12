# Typesetting

`justify` controls how the columns are arranged horizontally, and `align` controls how they are aligned vertically.

## Source

```vue
<script setup lang="ts">
const justifyOptions = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] as const
</script>

<template>
  <template v-for="justify in justifyOptions" :key="justify">
    <div class="label">
      justify="{{ justify }}"
    </div>
    <am-row :justify="justify" align="middle" class="box">
      <am-col :span="5">
        <div class="cell">
          5
        </div>
      </am-col>
      <am-col :span="5">
        <div class="cell tall">
          5
        </div>
      </am-col>
      <am-col :span="5">
        <div class="cell">
          5
        </div>
      </am-col>
    </am-row>
  </template>
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

.box {
  background: var(--am-color-fill-tertiary);
}

.cell {
  padding: 8px 0;
  color: var(--am-color-text-light-solid);
  font-size: var(--am-font-size-sm);
  text-align: center;
  background: var(--am-color-primary);
}

.cell.tall {
  padding: 16px 0;
  background: var(--am-color-primary-hover);
}
</style>
```
