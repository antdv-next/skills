# Custom index list

Customize the index list on the right with `indexList`; an index can be a number or any text.

## Source

```vue
<script setup lang="ts">
const indexList = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
  <div class="scroller">
    <am-index-bar :index-list="indexList">
      <template v-for="index in indexList" :key="index">
        <am-index-bar-anchor :index="index">
          Chapter {{ index }}
        </am-index-bar-anchor>
        <am-list :bordered="false">
          <am-list-item v-for="i in 3" :key="i" :title="`Chapter ${index} Section ${i}`" />
        </am-list>
      </template>
    </am-index-bar>
  </div>
</template>

<style scoped>
.scroller {
  height: 360px;
  overflow-y: auto;
}
</style>
```
