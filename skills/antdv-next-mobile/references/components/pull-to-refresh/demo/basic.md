# Basic usage

Releasing after pulling beyond the threshold fires `refresh`; set `v-model:refreshing` to `false` once the data has returned.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const refreshing = ref(false)
const count = ref(0)
const list = ref(Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`))

function onRefresh() {
  setTimeout(() => {
    count.value += 1
    list.value = Array.from({ length: 6 }, (_, i) => `Refresh ${count.value} - Item ${i + 1}`)
    refreshing.value = false
  }, 1000)
}
</script>

<template>
  <am-pull-to-refresh v-model:refreshing="refreshing" @refresh="onRefresh">
    <ul class="list">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </am-pull-to-refresh>
</template>

<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding: 12px 16px;
  border-bottom: 1px solid var(--am-color-split);
}
</style>
```
