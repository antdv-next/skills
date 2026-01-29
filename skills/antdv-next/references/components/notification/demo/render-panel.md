# render-panel

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

const InternalPanel = notification._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalPanel
    title="Hello World!"
    description="Hello World?"
    type="success"
  >
    <template #actions>
      <a-button type="primary" size="small">
        My Button
      </a-button>
    </template>
  </InternalPanel>
</template>
```
