# Load upwards

With `direction="up"`, loading is triggered when scrolled near the top, which suits chat records. You need to keep the scroll position yourself after inserting the history data.

## Source

```vue
<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const scroller = ref<HTMLElement>()
const list = ref(Array.from({ length: 12 }, (_, i) => 30 - 11 + i))
const loading = ref(false)
const hasMore = ref(true)

onMounted(() => {
  // start at the bottom
  scroller.value!.scrollTop = scroller.value!.scrollHeight
})

function onLoad() {
  setTimeout(async () => {
    const el = scroller.value!
    const prevHeight = el.scrollHeight
    const first = list.value[0]
    const count = Math.min(6, first - 1)
    list.value.unshift(...Array.from({ length: count }, (_, i) => first - count + i))
    if (list.value[0] <= 1)
      hasMore.value = false
    await nextTick()
    // keep the visible content from jumping
    el.scrollTop += el.scrollHeight - prevHeight
    loading.value = false
  }, 800)
}
</script>

<template>
  <div ref="scroller" class="scroller">
    <am-infinite-scroll
      v-model:loading="loading"
      direction="up"
      :has-more="hasMore"
      :threshold="20"
      :immediate-check="false"
      finished-text="No earlier messages"
      @load="onLoad"
    >
      <ul class="list">
        <li v-for="item in list" :key="item">
          Message {{ item }}
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
