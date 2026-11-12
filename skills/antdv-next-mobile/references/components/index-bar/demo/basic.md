# Basic usage

Place an `<am-index-bar-anchor>` before each group, and the index on the right is generated from the anchors automatically. Tap or drag on the index bar to jump quickly; the anchors are sticky while scrolling.

## Source

```vue
<script setup lang="ts">
const groups = 'ABCDEFGHJKLMNPQRSTWXYZ'.split('').map(letter => ({
  letter,
  names: Array.from({ length: 4 }, (_, i) => `${letter} Contact ${i + 1}`),
}))
</script>

<template>
  <div class="scroller">
    <am-index-bar>
      <template v-for="group in groups" :key="group.letter">
        <am-index-bar-anchor :index="group.letter" />
        <am-list :bordered="false">
          <am-list-item v-for="name in group.names" :key="name" :title="name" />
        </am-list>
      </template>
    </am-index-bar>
  </div>
</template>

<style scoped>
.scroller {
  height: 420px;
  overflow-y: auto;
}
</style>
```
