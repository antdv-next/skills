# Highlight color and events

Change the highlight color with the `--am-index-bar-highlight-color` variable; `select` is triggered when an index is tapped or dragged onto, and `change` is triggered when scrolling changes the active anchor.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const letters = ['A', 'B', 'C', 'D', 'E', 'F']
const log = ref('Scroll the list or tap an index')

function handleSelect(index: string | number) {
  log.value = `select: ${index}`
}

function handleChange(index: string | number) {
  log.value = `change: ${index}`
}
</script>

<template>
  <div class="log">
    {{ log }}
  </div>
  <div class="scroller">
    <am-index-bar class="custom-index-bar" @select="handleSelect" @change="handleChange">
      <template v-for="letter in letters" :key="letter">
        <am-index-bar-anchor :index="letter" />
        <am-list :bordered="false">
          <am-list-item v-for="i in 4" :key="i" :title="`${letter} Item ${i}`" />
        </am-list>
      </template>
    </am-index-bar>
  </div>
</template>

<style scoped>
.log {
  padding: 12px 16px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}

.scroller {
  height: 340px;
  overflow-y: auto;
}

.custom-index-bar {
  --am-index-bar-highlight-color: #fa541c;
  --am-index-bar-index-size: 18px;
  --am-index-bar-index-font-size: 11px;
}
</style>
```
