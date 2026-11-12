# Custom height and option content

`itemHeight` and `visibleItemCount` determine the size of the wheels; the `option` slot customizes the option content; `fieldNames` adapts to an existing data structure.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  [
    { name: 'Economy', code: 'Y', price: 680 },
    { name: 'Premium Economy', code: 'W', price: 980 },
    { name: 'Business', code: 'C', price: 2180 },
    { name: 'First', code: 'F', price: 3960 },
  ],
]
const value = ref(['W'])
</script>

<template>
  <am-picker-view
    v-model:value="value"
    :columns="columns"
    :field-names="{ label: 'name', value: 'code' }"
    :item-height="56"
    :visible-item-count="3"
  >
    <template #option="{ option, selected }">
      <div class="cabin" :class="{ 'cabin-selected': selected }">
        <span>{{ option.name }}</span>
        <span class="cabin-price">¥{{ option.price }}</span>
      </div>
    </template>
  </am-picker-view>
</template>

<style scoped>
.cabin {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
}

.cabin-price {
  color: var(--am-color-text-tertiary);
  font-size: 14px;
}

.cabin-selected {
  font-weight: 600;
}

.cabin-selected .cabin-price {
  color: var(--am-color-error);
}
</style>
```
