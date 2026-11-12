# List form

Set `block` in the default style to display the options full-width in list form: text on the left, radio on the right, and the whole row is the tap target.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('wechat')
const options = [
  { label: 'WeChat Pay', value: 'wechat' },
  { label: 'Alipay', value: 'alipay' },
  { label: 'Bank card', value: 'card' },
  { label: 'Cash on delivery (unavailable)', value: 'cod', disabled: true },
]
</script>

<template>
  <div class="demo-radio-list">
    <am-radio-group v-model:value="value" :options="options" block />
  </div>
</template>

<style scoped>
.demo-radio-list {
  padding: 0 var(--am-padding);
  background: var(--am-color-bg-container);
}
</style>
```
