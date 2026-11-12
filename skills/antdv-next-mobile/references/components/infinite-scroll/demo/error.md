# Load failure and retry

Set `error` to `true` when the request fails and the component shows a failure tip; clicking the tip sets `error` back to `false` and fires `load` again.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const list = ref<number[]>([])
const loading = ref(false)
const error = ref(false)
const finished = ref(false)
let times = 0

function onLoad() {
  setTimeout(() => {
    times += 1
    loading.value = false
    // simulate a failure on the second request
    if (times === 2) {
      error.value = true
      return
    }
    const start = list.value.length
    list.value.push(...Array.from({ length: 10 }, (_, i) => start + i + 1))
    if (list.value.length >= 30)
      finished.value = true
  }, 800)
}
</script>

<template>
  <div class="scroller">
    <am-infinite-scroll v-model:loading="loading" v-model:error="error" :finished="finished" :threshold="50" @load="onLoad">
      <ul class="list">
        <li v-for="item in list" :key="item">
          Item {{ item }}
        </li>
      </ul>
    </am-infinite-scroll>
  </div>
</template>

<style scoped>
.scroller {
  height: 320px;
  overflow-y: auto;
  border: 1px solid var(--am-color-border-secondary);
  border-radius: 8px;
}

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
