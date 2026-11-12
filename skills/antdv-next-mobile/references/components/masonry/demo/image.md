# Image

Image cards. The layout is measured again once an image has loaded (or failed); when the ratio of the image is known, reserve its height with `aspect-ratio` to avoid jumps while loading.

## Source

```vue
<script setup lang="ts">
interface Photo {
  title: string
  src: string
  ratio: string
}

const hues = [210, 265, 330, 20, 150, 45, 185, 290]
const sizes = [[4, 5], [1, 1], [3, 4], [4, 3], [2, 3], [1, 1], [16, 9], [3, 4]]
const titles = ['Morning lake', 'Old town', 'Pink dunes', 'Autumn road', 'Pine forest', 'Golden hour', 'Sea breeze', 'Night market']

/** A generated placeholder picture, so the demo does not depend on a remote image. */
function picture(hue: number, width: number, height: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width * 40} ${height * 40}">`
    + `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">`
    + `<stop offset="0" stop-color="hsl(${hue} 80% 72%)"/><stop offset="1" stop-color="hsl(${hue + 40} 70% 52%)"/>`
    + `</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/>`
    + `<circle cx="${width * 28}" cy="${height * 12}" r="${width * 4}" fill="#fff" fill-opacity=".55"/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const items = titles.map((title, index) => {
  const [width, height] = sizes[index]
  const photo: Photo = { title, src: picture(hues[index], width, height), ratio: `${width} / ${height}` }
  return { key: index, data: photo }
})
</script>

<template>
  <am-masonry :items="items" :gutter="[12, 12]">
    <template #itemRender="{ data }">
      <div class="photo">
        <img :src="data.src" :alt="data.title" :style="{ aspectRatio: data.ratio }">
        <div class="photo-title">
          {{ data.title }}
        </div>
      </div>
    </template>
  </am-masonry>
</template>

<style scoped>
.photo {
  overflow: hidden;
  background: var(--am-color-bg-container);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius);
}

.photo img {
  display: block;
  width: 100%;
}

.photo-title {
  padding: 8px 10px;
  color: var(--am-color-text);
  font-size: var(--am-font-size-sm);
}
</style>
```
