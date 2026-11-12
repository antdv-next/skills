# Inside a scroll container

Inside a fixed-height scroll container, pulling is only triggered when the container is scrolled to the top; pulling down after scrolling down is a normal scroll.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const refreshing = ref(false)
const list = ref(Array.from({ length: 20 }, (_, i) => i + 1))

function onRefresh() {
  setTimeout(() => {
    const first = list.value[0]
    list.value = [first - 2, first - 1, ...list.value]
    refreshing.value = false
  }, 1000)
}
</script>

<template>
  <div class="scroller">
    <am-pull-to-refresh v-model:refreshing="refreshing" @refresh="onRefresh">
      <ul class="list">
        <li v-for="item in list" :key="item">
          Item {{ item }}
        </li>
      </ul>
    </am-pull-to-refresh>
  </div>
</template>

<style scoped>
.scroller {
  height: 300px;
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
