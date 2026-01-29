# render-panel

## Source

```vue
<script setup lang="ts">
import { message } from 'antdv-next'

const InternalPanel = message._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalPanel content="Hello World!" type="error" />
</template>
```
