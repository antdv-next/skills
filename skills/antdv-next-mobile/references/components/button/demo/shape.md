# Button shape

Use `shape` for a pill button or a circle button.

## Source

```vue
<script setup lang="ts">
import { SearchOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-flex gap="small" align="center" wrap>
    <am-button type="primary">
      Default
    </am-button>
    <am-button type="primary" shape="round">
      Round
    </am-button>
    <am-button type="primary" shape="circle">
      <template #icon>
        <SearchOutlined />
      </template>
    </am-button>
    <am-button shape="circle">
      <template #icon>
        <SearchOutlined />
      </template>
    </am-button>
  </am-flex>
</template>
```
