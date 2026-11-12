# Custom tips

Customize the tip of each state through the `loadingText` / `finishedText` / `errorText` props or the corresponding slots.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const list = ref<number[]>([])
const loading = ref(false)
const hasMore = ref(true)

function onLoad() {
  setTimeout(() => {
    const start = list.value.length
    list.value.push(...Array.from({ length: 10 }, (_, i) => start + i + 1))
    loading.value = false
    if (list.value.length >= 20)
      hasMore.value = false
  }, 1200)
}
</script>

<template>
  <div class="scroller">
    <am-infinite-scroll v-model:loading="loading" :has-more="hasMore" :threshold="50" @load="onLoad">
      <ul class="list">
        <li v-for="item in list" :key="item">
          Item {{ item }}
        </li>
      </ul>
      <template #loading>
        <span class="dots"><i /><i /><i /></span>
        <span>On the way</span>
      </template>
      <template #finished>
        <span>—— The end ——</span>
      </template>
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

.dots {
  display: inline-flex;
  gap: 4px;
}

.dots i {
  width: 6px;
  height: 6px;
  background: var(--am-color-primary);
  border-radius: 50%;
  animation: dot-blink 1s infinite ease-in-out;
}

.dots i:nth-child(2) {
  animation-delay: 0.15s;
}

.dots i:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes dot-blink {
  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}
</style>
```
