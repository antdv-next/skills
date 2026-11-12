# Custom pull area

The slot of every stage receives the current pull distance `distance`, which makes it possible to build animations that follow the finger. `headHeight` adjusts the height of the top area, and `threshold` adjusts the trigger distance.

## Source

```vue
<script setup lang="ts">
import { SyncOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const refreshing = ref(false)

function onRefresh() {
  setTimeout(() => {
    refreshing.value = false
  }, 1500)
}
</script>

<template>
  <am-pull-to-refresh v-model:refreshing="refreshing" :head-height="72" :threshold="72" @refresh="onRefresh">
    <template #pulling="{ distance }">
      <SyncOutlined class="icon" :style="{ transform: `rotate(${distance * 4}deg) scale(${Math.min(distance / 72, 1)})` }" />
    </template>
    <template #canRelease>
      <SyncOutlined class="icon icon-active" />
    </template>
    <template #refreshing>
      <SyncOutlined class="icon icon-active" spin />
    </template>
    <template #complete>
      <span class="done">8 new items</span>
    </template>
    <ul class="list">
      <li v-for="i in 6" :key="i">
        Item {{ i }}
      </li>
    </ul>
  </am-pull-to-refresh>
</template>

<style scoped>
.icon {
  color: var(--am-color-text-quaternary);
  font-size: 28px;
}

.icon-active,
.done {
  color: var(--am-color-primary);
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
