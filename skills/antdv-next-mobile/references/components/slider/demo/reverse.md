# Reverse

Set `reverse` to reverse the slider.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const reverse = ref(true)
</script>

<template>
  <am-slider :default-value="30" :reverse="reverse" />
  <am-slider range :default-value="[20, 50]" :reverse="reverse" />
  <am-button size="small" @click="reverse = !reverse">
    reverse: {{ reverse }}
  </am-button>
</template>
```
