# Basic usage

Bind the list with `v-model:value` and append an item to send a bullet; once a bullet has left the container the component removes it from the list.

## Source

```vue
<script setup lang="ts">
import type { BarrageItem } from '@antdv-next/mobile'
import { shallowRef } from 'vue'

const texts = ['Nice!', 'Hello there', 'So smooth', 'Awesome', '666', 'Love it']
let seed = 0

function create(): BarrageItem {
  seed += 1
  return { id: seed, text: texts[seed % texts.length] }
}

const list = shallowRef<BarrageItem[]>(Array.from({ length: 6 }, create))

function send() {
  list.value = [...list.value, create()]
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-barrage v-model:value="list">
      <div class="stage" />
    </am-barrage>
    <am-button type="primary" block @click="send">
      Send
    </am-button>
  </am-flex>
</template>

<style scoped>
.stage {
  height: 160px;
  background: linear-gradient(135deg, #434343, #1f1f1f);
  border-radius: var(--am-border-radius);
}
</style>
```
