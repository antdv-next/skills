# Load more on scroll

Load page by page with `InfiniteScroll` inside a scroll container. New cards fade in once they are measured and the existing cards keep their position. The height of the masonry is only updated after the new cards are measured, so `loading` is reset in `layoutChange`: otherwise the list would still look scrolled to the end and load again.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface Card {
  title: string
  cover: number
  hue: number
}

const titles = ['Weekend hike', 'Street food', 'Desk setup', 'Rainy day reading list', 'Coffee notes', 'Tiny balcony garden']

const items = ref<{ key: number, data: Card }[]>([])
const loading = ref(false)
const hasMore = ref(true)

function createPage(start: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const key = start + i
    return {
      key,
      data: { title: titles[key % titles.length], cover: 70 + ((key * 37) % 90), hue: (key * 47) % 360 },
    }
  })
}

function onLoad() {
  setTimeout(() => {
    items.value = [...items.value, ...createPage(items.value.length)]
  }, 600)
}

/** The new cards are placed and the masonry has its new height. */
function onLayoutChange() {
  loading.value = false
  if (items.value.length >= 50)
    hasMore.value = false
}
</script>

<template>
  <div class="scroller">
    <am-infinite-scroll v-model:loading="loading" :has-more="hasMore" :threshold="80" @load="onLoad">
      <am-masonry :items="items" :gutter="8" class="feed" @layout-change="onLayoutChange">
        <template #itemRender="{ data, index }">
          <div class="card">
            <div class="cover" :style="{ 'height': `${data.cover}px`, '--hue': data.hue }" />
            <div class="title">
              {{ index + 1 }}. {{ data.title }}
            </div>
          </div>
        </template>
      </am-masonry>
    </am-infinite-scroll>
  </div>
</template>

<style scoped>
.scroller {
  height: 420px;
  overflow-y: auto;
  background: var(--am-color-bg-layout);
}

.feed {
  margin: 8px;
}

.card {
  overflow: hidden;
  background: var(--am-color-bg-container);
  border-radius: var(--am-border-radius);
}

.cover {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, hsl(var(--hue) 80% 60%) 35%, var(--am-color-bg-container)),
    color-mix(in srgb, var(--am-color-primary) 45%, var(--am-color-bg-container))
  );
}

.title {
  padding: 8px;
  color: var(--am-color-text);
  font-size: var(--am-font-size-sm);
}
</style>
```
