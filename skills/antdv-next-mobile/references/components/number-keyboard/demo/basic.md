# Basic usage

Control the visibility of the keyboard with `v-model:open` and bind the entered string with `v-model:value`. Tapping outside the keyboard hides it automatically (the input area in this demo stops event propagation, so tapping it again does not hide the keyboard); the keyboard does not steal focus or lock page scrolling.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const value = ref('')
</script>

<template>
  <am-flex vertical gap="small">
    <div class="demo-field" :class="{ 'demo-field-focus': open }" @touchstart.stop @mousedown.stop @click="open = true">
      <span v-if="value">{{ value }}</span>
      <span v-else class="demo-placeholder">Tap to enter phone number</span>
    </div>
    <am-button block @click="value = ''">
      Clear
    </am-button>
  </am-flex>
  <am-number-keyboard v-model:open="open" v-model:value="value" :maxlength="11" close-button-text="Done" />
</template>

<style scoped>
.demo-field {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 12px;
  font-size: 18px;
  letter-spacing: 1px;
  background: var(--am-color-bg-container);
  border: 1px solid var(--am-color-border);
  border-radius: 8px;
}

.demo-field-focus {
  border-color: var(--am-color-primary);
}

.demo-placeholder {
  color: var(--am-color-text-placeholder);
  font-size: 16px;
  letter-spacing: 0;
}
</style>
```
