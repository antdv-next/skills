# Password input

Combine `maxlength` with custom password cells to implement payment password input: the keyboard hides automatically once 6 digits are entered.

## Source

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

const open = ref(false)
const value = ref('')
const result = ref('')

watch(value, (val) => {
  result.value = ''
  if (val.length === 6) {
    open.value = false
    result.value = 'Password entered'
  }
})
</script>

<template>
  <div class="demo-password" @click="open = true">
    <span v-for="index in 6" :key="index" class="demo-cell" :class="{ 'demo-cell-active': open && value.length === index - 1 }">
      <i v-if="value.length >= index" class="demo-dot" />
    </span>
  </div>
  <div class="demo-tip">
    {{ result || 'Enter the 6-digit payment password' }}
  </div>
  <am-number-keyboard v-model:open="open" v-model:value="value" :maxlength="6" random-key-order :hide-on-click-outside="false" close-button-text="Hide" />
</template>

<style scoped>
.demo-password {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.demo-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 48px;
  background: var(--am-color-bg-container);
  border: 1px solid var(--am-color-border);
  border-radius: 8px;
}

.demo-cell-active {
  border-color: var(--am-color-primary);
}

.demo-dot {
  width: 10px;
  height: 10px;
  background: var(--am-color-text);
  border-radius: 50%;
}

.demo-tip {
  margin-top: 12px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
  text-align: center;
}
</style>
```
