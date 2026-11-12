# List form

`block` displays options full-width in a list form: text on the left, check icon on the right, and the whole row is the touch target. It suits settings pages and forms.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['push'])
const options = [
  { label: 'Push notifications', value: 'push' },
  { label: 'SMS notifications', value: 'sms' },
  { label: 'Email notifications', value: 'email' },
  { label: 'Phone calls (unavailable)', value: 'phone', disabled: true },
]
</script>

<template>
  <div class="demo-checkbox-list">
    <am-checkbox-group v-model:value="value" :options="options" block shape="round" />
  </div>
</template>

<style scoped>
.demo-checkbox-list {
  padding: 0 var(--am-padding);
  background: var(--am-color-bg-container);
}
</style>
```
