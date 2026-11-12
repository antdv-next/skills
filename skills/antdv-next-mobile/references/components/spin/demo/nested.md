# Wrap content

Embed content into `Spin` directly to put an existing container into the loading state.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const spinning = ref(true)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-spin :spinning="spinning" description="Loading...">
      <am-alert
        type="info"
        title="Alert title"
        description="Further details about the alert. You can tap and read it once loading is done."
      />
    </am-spin>
    <am-flex align="center" justify="space-between">
      <span>Loading</span>
      <am-switch v-model:checked="spinning" />
    </am-flex>
  </am-flex>
</template>
```
