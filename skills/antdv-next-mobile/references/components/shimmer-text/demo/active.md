# Stop the animation

With `active` set to `false` the animation stops and the text is rendered in the base color. Handy to switch the state when a task finished.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <am-flex justify="space-between" align="center">
    <am-shimmer-text :active="loading" :content="loading ? 'Uploading photos...' : 'Upload finished'" />
    <am-switch v-model:checked="loading" />
  </am-flex>
</template>
```
