# Custom text

Customize the text of each stage with `pullingText`, `canReleaseText`, `refreshingText` and `completeText`; `completeDelay` controls how long the complete tip stays.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const refreshing = ref(false)

function onRefresh() {
  setTimeout(() => {
    refreshing.value = false
  }, 1000)
}
</script>

<template>
  <am-pull-to-refresh
    v-model:refreshing="refreshing"
    pulling-text="Pull harder"
    can-release-text="Let go"
    refreshing-text="Loading hard..."
    complete-text="All done"
    :complete-delay="1000"
    @refresh="onRefresh"
  >
    <ul class="list">
      <li v-for="i in 6" :key="i">
        Item {{ i }}
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
