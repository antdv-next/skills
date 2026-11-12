# Custom rendering and design tokens

Use the `labelRender` slot to customize the option content, and override the `--am-segmented-*` component tokens to customize the appearance.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'Monthly', value: 'month', price: '¥ 25' },
  { label: 'Quarterly', value: 'quarter', price: '¥ 68' },
  { label: 'Yearly', value: 'year', price: '¥ 228' },
]
const value = ref<string | number>('quarter')
</script>

<template>
  <am-segmented v-model:value="value" class="plan" block :options="options">
    <template #labelRender="option">
      <div class="plan-item">
        <b>{{ option.label }}</b>
        <span>{{ options.find(item => item.value === option.value)?.price }}</span>
      </div>
    </template>
  </am-segmented>
</template>

<style scoped>
.plan {
  --am-segmented-padding: 4px;
  --am-segmented-border-radius: 14px;
  --am-segmented-selected-background: var(--am-color-primary);
  --am-segmented-selected-color: var(--am-color-text-light-solid);
}

.plan-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 0;
  line-height: 1.4;
}

.plan-item span {
  font-size: 12px;
  opacity: 0.75;
}
</style>
```
