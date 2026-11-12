# Marks

Use `marks` to annotate a graduated slider. `included` being `false` means the values are independent; when `step` is `null`, only the values on the marks can be selected.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: { style: { color: 'var(--am-color-error)' }, label: '100°C' },
}
const a = ref(37)
const b = ref(26)
const c = ref(37)
</script>

<template>
  <div class="demo-slider-list">
    <div>
      <p>included = true</p>
      <am-slider v-model:value="a" :marks="marks" />
    </div>
    <div>
      <p>included = false</p>
      <am-slider v-model:value="b" :marks="marks" :included="false" />
    </div>
    <div>
      <p>step = null</p>
      <am-slider v-model:value="c" :marks="marks" :step="null" />
    </div>
  </div>
</template>

<style scoped>
.demo-slider-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-slider-list p {
  margin: 0;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
