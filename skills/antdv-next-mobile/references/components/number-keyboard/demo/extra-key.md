# Extra keys

`extraKey` sets the extra keys: the default style supports 1 at the bottom left (such as `X` for an ID number or a decimal point for an amount), and the `custom` style supports up to 2.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const current = ref<'id' | 'decimal' | 'double' | ''>('')
const id = ref('')
const decimal = ref('')
const double = ref('')
</script>

<template>
  <am-list>
    <am-list-item title="ID number (X key)" :extra="id || 'Tap to enter'" clickable @click="current = 'id'" />
    <am-list-item title="Decimal point" :extra="decimal || 'Tap to enter'" clickable @click="current = 'decimal'" />
    <am-list-item title="Two extra keys" :extra="double || 'Tap to enter'" clickable @click="current = 'double'" />
  </am-list>
  <am-number-keyboard
    v-model:value="id"
    :open="current === 'id'"
    extra-key="X"
    :maxlength="18"
    close-button-text="Done"
    @update:open="current = ''"
  />
  <am-number-keyboard
    v-model:value="decimal"
    :open="current === 'decimal'"
    extra-key="."
    close-button-text="Done"
    @update:open="current = ''"
  />
  <am-number-keyboard
    v-model:value="double"
    :open="current === 'double'"
    theme="custom"
    :extra-key="['00', '.']"
    @update:open="current = ''"
  />
</template>
```
