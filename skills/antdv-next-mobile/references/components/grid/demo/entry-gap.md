# Gap and horizontal items

Set the spacing between the items with `gap` (the array form is `[horizontal, vertical]`); `orientation="horizontal"` puts the icon beside the title.

## Source

```vue
<script setup lang="ts">
import { CameraOutlined, FileTextOutlined, ScanOutlined, VideoCameraOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  { key: 'scan', icon: h(ScanOutlined), title: 'Scan' },
  { key: 'photo', icon: h(CameraOutlined), title: 'Photo' },
  { key: 'video', icon: h(VideoCameraOutlined), title: 'Video' },
  { key: 'file', icon: h(FileTextOutlined), title: 'File' },
]
</script>

<template>
  <div class="panel">
    <am-grid :items="items" :columns="2" :gap="12" :icon-size="22" orientation="horizontal" class="cards" />
  </div>
</template>

<style scoped>
.panel {
  padding: 12px;
  background: var(--am-color-bg-layout);
  border-radius: var(--am-border-radius);
}

.cards {
  --am-grid-item-radius: var(--am-border-radius);
  --am-grid-font-size: var(--am-font-size);
}
</style>
```
