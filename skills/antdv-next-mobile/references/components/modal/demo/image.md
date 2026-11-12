# Image and header

Show an image at the top with `image`, or use the `header` slot to place any content (icons, illustrations and so on).

## Source

```vue
<script setup lang="ts">
import { GiftFilled } from '@antdv-next/icons'
import { ref } from 'vue'

const image = ref(false)
const header = ref(false)
const src = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22260%22 height=%22120%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 x2=%221%22 y1=%220%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%236253e1%22/%3E%3Cstop offset=%221%22 stop-color=%22%2304befe%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22260%22 height=%22120%22 fill=%22url(%23g)%22/%3E%3C/svg%3E'
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="image = true">
      Top image
    </am-button>
    <am-button block @click="header = true">
      header slot
    </am-button>
  </am-flex>
  <am-modal v-model:open="image" title="New feature" :image="src" :ok-cancel="false" @ok="image = false">
    You can now drag to reorder the cards on the home page.
  </am-modal>
  <am-modal v-model:open="header" title="Checked in" ok-text="Claim reward" :ok-cancel="false" @ok="header = false">
    <template #header>
      <GiftFilled class="gift" />
    </template>
    7-day streak! You earned 100 points.
  </am-modal>
</template>

<style scoped>
.gift {
  color: var(--am-color-warning);
  font-size: 48px;
}
</style>
```
