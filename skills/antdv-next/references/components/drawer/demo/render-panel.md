# render-panel

## Source

```vue
<script setup lang="ts">
import { Drawer } from 'antdv-next'

const InternalDrawer = (Drawer as any)._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <div style="padding: 32px;background: #e6e6e6">
    <InternalDrawer title="Hello Title" style="height: 300px" footer="Footer!">
      Hello Content
    </InternalDrawer>
  </div>
</template>
```
