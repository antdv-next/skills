# Large data / virtual scrolling

Virtual scrolling (`virtual`) is enabled for the wheels by default: each column only renders the options near the visible area. The two columns below have 10,000 and 2,000 options respectively, and the number of nodes actually mounted is shown underneath.

## Source

```vue
<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const columns = [
  Array.from({ length: 10000 }, (_, index) => ({ label: `${index + 1}`, value: index + 1 })),
  Array.from({ length: 2000 }, (_, index) => ({ label: `Year ${1000 + index}`, value: 1000 + index })),
]
const value = ref<number[]>([6666, 2026])

const wrapRef = ref<HTMLElement>()
const mounted = ref(0)
function count() {
  mounted.value = wrapRef.value?.querySelectorAll('.am-picker-view-item').length ?? 0
}
onMounted(count)
watch(value, () => nextTick(count))
</script>

<template>
  <div ref="wrapRef">
    <am-picker-view v-model:value="value" :columns="columns" />
  </div>
  <div class="demo-result">
    Value: {{ JSON.stringify(value) }}, 12,000 options, {{ mounted }} nodes mounted
  </div>
</template>

<style scoped>
.demo-result {
  margin-top: 8px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
