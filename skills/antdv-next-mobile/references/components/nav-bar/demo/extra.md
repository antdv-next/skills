# Left and right content

The `left` and `right` slots (or the same-named props) hold page-level actions such as close, search and more.

## Source

```vue
<script setup lang="ts">
import { CloseOutlined, MoreOutlined, SearchOutlined } from '@antdv-next/icons'
</script>

<template>
  <div class="stack">
    <am-nav-bar title="Title">
      <template #right>
        <SearchOutlined class="action" />
        <MoreOutlined class="action" />
      </template>
    </am-nav-bar>
    <am-nav-bar title="Web page title" back="Back">
      <template #left>
        <CloseOutlined class="action" />
      </template>
      <template #right>
        <am-button type="link" size="small">
          Done
        </am-button>
      </template>
    </am-nav-bar>
    <am-nav-bar title="Text action" right="Edit" />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action {
  font-size: 20px;
}
</style>
```
