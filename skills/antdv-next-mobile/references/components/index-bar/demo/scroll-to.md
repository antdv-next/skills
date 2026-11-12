# Scroll to an anchor

Scroll to a given anchor with the `scrollTo(index)` method of the component instance; `stickyOffsetTop` reserves space at the top for the sticky anchors (the height of the sticky action bar in this example).

## Source

```vue
<script setup lang="ts">
import type { IndexBarExpose } from '@antdv-next/mobile'
import { ref } from 'vue'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const indexBarRef = ref<IndexBarExpose>()
</script>

<template>
  <div class="scroller">
    <div class="toolbar">
      <am-button size="small" @click="indexBarRef?.scrollTo('A')">
        Back to A
      </am-button>
      <am-button size="small" @click="indexBarRef?.scrollTo('D')">
        Go to D
      </am-button>
      <am-button size="small" @click="indexBarRef?.scrollTo('G')">
        Go to G
      </am-button>
    </div>
    <am-index-bar ref="indexBarRef" :sticky-offset-top="48">
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
.scroller {
  height: 400px;
  overflow-y: auto;
}

.toolbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  background: var(--am-color-bg-container);
}
</style>
```
