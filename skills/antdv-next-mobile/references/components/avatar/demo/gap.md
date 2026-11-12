# Autoset font size

Long text shrinks automatically to fit the avatar width; `gap` sets the minimum distance between the characters and the left / right edges.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const names = ['U', 'Lucy', 'Tom', 'Edward']
const index = ref(0)
const gap = ref(4)
</script>

<template>
  <am-space size="middle" align="center" wrap>
    <am-avatar size="large" :gap="gap">
      {{ names[index] }}
    </am-avatar>
    <am-button size="small" @click="index = (index + 1) % names.length">
      Change name
    </am-button>
    <am-button size="small" @click="gap = gap === 4 ? 12 : 4">
      gap: {{ gap }}
    </am-button>
  </am-space>
</template>
```
