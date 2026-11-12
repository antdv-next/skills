# Mask color

Set the mask color with `color`: `white` is a light mask, and any CSS color value can also be passed.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const color = ref('default')

function show(value: string) {
  color.value = value
  open.value = true
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="show('default')">
      Default
    </am-button>
    <am-button @click="show('white')">
      White
    </am-button>
    <am-button @click="show('rgb(22 119 255 / 40%)')">
      Custom color
    </am-button>
  </am-flex>
  <am-mask v-model:open="open" :color="color" closable />
</template>
```
