# Custom anchor content

The default slot of the anchor customizes its content; set `sticky` to `false` to turn off sticky anchors.

## Source

```vue
<script setup lang="ts">
const cities = [
  { index: '★', title: 'Popular', list: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'] },
  { index: 'A', title: 'A', list: ['Anqing', 'Anyang', 'Anshan'] },
  { index: 'B', title: 'B', list: ['Baoding', 'Baotou', 'Beihai', 'Bengbu'] },
  { index: 'C', title: 'C', list: ['Chengdu', 'Chongqing', 'Changsha', 'Changzhou'] },
  { index: 'D', title: 'D', list: ['Dalian', 'Dongguan', 'Dali'] },
  { index: 'H', title: 'H', list: ['Hangzhou', 'Hefei', 'Harbin', 'Haikou'] },
]
</script>

<template>
  <div class="scroller">
    <am-index-bar :sticky="false">
      <template v-for="group in cities" :key="group.index">
        <am-index-bar-anchor :index="group.index">
          <b>{{ group.title }}</b> ({{ group.list.length }})
        </am-index-bar-anchor>
        <am-list :bordered="false">
          <am-list-item v-for="city in group.list" :key="city" :title="city" />
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
