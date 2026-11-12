# Show more

The common "more filters" case. The content is rendered on first expand by default; `force-render` renders it up front and `destroy-on-hidden` removes it after collapsing. `afterOpenChange` fires when the animation finished.

## Source

```vue
<script setup lang="ts">
import { DownOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const open = ref(false)
const state = ref('collapsed')
const base = ['All', 'Unpaid', 'Shipped']
const more = ['Delivered', 'Refund', 'Cancelled', 'Reviewed', 'Archived']
</script>

<template>
  <am-flex wrap gap="small">
    <am-tag v-for="item in base" :key="item">
      {{ item }}
    </am-tag>
  </am-flex>
  <am-collapse-transition :open="open" destroy-on-hidden @after-open-change="state = $event ? 'expanded' : 'collapsed'">
    <am-flex wrap gap="small" class="demo-more">
      <am-tag v-for="item in more" :key="item">
        {{ item }}
      </am-tag>
    </am-flex>
  </am-collapse-transition>
  <am-flex justify="space-between" align="center" class="demo-footer">
    <span class="demo-state">State: {{ state }}</span>
    <am-button type="link" size="small" @click="open = !open">
      {{ open ? 'Less' : 'More' }}
      <DownOutlined class="demo-arrow" :class="{ 'demo-arrow-open': open }" />
    </am-button>
  </am-flex>
</template>

<style scoped>
.demo-more {
  padding-top: 8px;
}

.demo-footer {
  margin-top: 8px;
}

.demo-state {
  color: var(--am-color-text-tertiary);
}

.demo-arrow {
  margin-inline-start: 4px;
  transition: transform var(--am-motion-duration-slow);
}

.demo-arrow-open {
  transform: rotate(180deg);
}
</style>
```
