# render-panel

## Source

```vue
<script setup lang="ts">
import { Popover } from 'antdv-next'

const InternalPanel = Popover._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalPanel title="Title">
    <template #content>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </template>
  </InternalPanel>
  <InternalPanel title="Title" placement="bottomLeft" style="width: 250px">
    <template #content>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </template>
  </InternalPanel>
</template>
```
