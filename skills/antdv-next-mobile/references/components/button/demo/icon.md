# Icon button

Set the icon with the `icon` slot or the `icon` prop; `iconPlacement` controls the icon position.

## Source

```vue
<script setup lang="ts">
import { DownloadOutlined, RightOutlined, SearchOutlined } from '@antdv-next/icons'
import { h } from 'vue'
</script>

<template>
  <am-flex gap="small" align="center" wrap>
    <am-button type="primary">
      <template #icon>
        <SearchOutlined />
      </template>
      Search
    </am-button>
    <am-button :icon="() => h(DownloadOutlined)">
      Download
    </am-button>
    <am-button icon-placement="end" color="primary" variant="filled">
      <template #icon>
        <RightOutlined />
      </template>
      Next
    </am-button>
    <am-button>
      <template #icon>
        <SearchOutlined />
      </template>
    </am-button>
  </am-flex>
</template>
```
