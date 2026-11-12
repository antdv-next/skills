# Play and pause

With `autoPlay` set to `false` the bullets wait until `play()` is called; use the `play()` / `pause()` methods of the component instance to control them. Re-append a bullet in the `finish` event to loop.

## Source

```vue
<script setup lang="ts">
import type { BarrageExpose, BarrageItem } from '@antdv-next/mobile'
import { ref, shallowRef } from 'vue'

const barrageRef = ref<BarrageExpose>()
const playing = ref(false)
let seed = 0

function create(text: string): BarrageItem {
  seed += 1
  return { id: seed, text }
}

const list = shallowRef<BarrageItem[]>(['Play', 'Pause', 'Replay', 'Loop', 'Again'].map(create))

function toggle() {
  playing.value = !playing.value
  if (playing.value)
    barrageRef.value?.play()
  else
    barrageRef.value?.pause()
}

function handleFinish(item: BarrageItem) {
  // the finished bullet is removed first, append it with a new id to loop
  list.value = [...list.value, create(String(item.text))]
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-barrage ref="barrageRef" v-model:value="list" :auto-play="false" :rows="3" @finish="handleFinish">
      <div class="stage" />
    </am-barrage>
    <am-button block @click="toggle">
      {{ playing ? 'Pause' : 'Play' }}
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
