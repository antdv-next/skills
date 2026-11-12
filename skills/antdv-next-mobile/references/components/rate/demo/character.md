# Other characters

The stars can be replaced with other characters: an icon, text, or different content per position through a function / the `character` slot.

## Source

```vue
<script setup lang="ts">
import { FrownOutlined, HeartFilled, MehOutlined, SmileOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const heart = ref(2)
const letter = ref(1.5)
const number = ref(3)
const face = ref(2)
const faces = [FrownOutlined, MehOutlined, SmileOutlined]
const renderNumber = ({ index }: { index: number }) => index + 1
</script>

<template>
  <div class="demo-rate-list">
    <am-rate v-model:value="heart" :character="h(HeartFilled)" class="demo-rate-heart" />
    <am-rate v-model:value="letter" character="A" allow-half />
    <am-rate v-model:value="number" :character="renderNumber" />
    <am-rate v-model:value="face" :count="3">
      <template #character="{ index }">
        <component :is="faces[index]" />
      </template>
    </am-rate>
  </div>
</template>

<style scoped>
.demo-rate-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.demo-rate-heart {
  --am-rate-color: var(--am-color-error);
}
</style>
```
