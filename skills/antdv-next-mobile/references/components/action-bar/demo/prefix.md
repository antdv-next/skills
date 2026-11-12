# Submit bar

The `prefix` prop or slot puts free content before the actions and takes the remaining width, e.g. a total price, which makes a submit bar. Buttons keep their own width in this case.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <am-action-bar :fixed="false" :safe-area="false">
    <template #prefix>
      <div class="summary">
        <am-checkbox v-model:checked="checked">
          All
        </am-checkbox>
        <span class="total">Total <b class="price">$ 128.00</b></span>
      </div>
    </template>
    <am-action-bar-button color="danger" :disabled="!checked">
      Submit
    </am-action-bar-button>
  </am-action-bar>
</template>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-end: 8px;
}

.total {
  color: var(--am-color-text-secondary);
}

.price {
  color: var(--am-color-error);
  font-size: var(--am-font-size-lg);
}
</style>
```
