# Multiple keywords

Pass an array to `keywords` to highlight several keywords at once; overlapping or adjacent matches are merged into one. `caseSensitive` turns on case-sensitive matching.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const content = 'Mobile first. Mobile components are built for touch, gestures and small screens.'
const caseSensitive = ref(false)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-highlight
      :content="content"
      :keywords="['mobile', 'touch', 'small screens']"
      :case-sensitive="caseSensitive"
    />
    <am-flex justify="space-between" align="center">
      <span>Case sensitive</span>
      <am-switch v-model:checked="caseSensitive" />
    </am-flex>
  </am-flex>
</template>
```
