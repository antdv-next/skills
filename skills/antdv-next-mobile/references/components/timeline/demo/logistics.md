# Logistics tracking

Use the `contentRender` slot to customize the content structure and build the logistics tracking that is common on mobile.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 1, status: 'Delivered', desc: 'Your parcel has been signed for. Thank you.', time: '09-03 14:21', color: 'green' },
  { key: 2, status: 'Out for delivery', desc: 'The courier is on the way. Please keep your phone on.', time: '09-03 08:40' },
  { key: 3, status: 'In transit', desc: 'Parcel arrived at Hangzhou transit center.', time: '09-02 21:15', color: 'gray' },
  { key: 4, status: 'Picked up', desc: 'Picked up by the courier in Shanghai.', time: '09-01 18:02', color: 'gray' },
]
</script>

<template>
  <am-timeline :items="items" variant="filled">
    <template #contentRender="{ index }">
      <div class="logistics-status" :class="{ 'logistics-status-active': index === 0 }">
        {{ items[index]?.status }}
      </div>
      <div class="logistics-desc">
        {{ items[index]?.desc }}
      </div>
      <div class="logistics-time">
        {{ items[index]?.time }}
      </div>
    </template>
  </am-timeline>
</template>

<style scoped>
.logistics-status {
  color: var(--am-color-text-secondary);
  font-weight: 600;
}

.logistics-status-active {
  color: var(--am-color-text);
}

.logistics-desc {
  margin-top: 2px;
  color: var(--am-color-text-secondary);
}

.logistics-time {
  margin-top: 2px;
  color: var(--am-color-text-tertiary);
  font-size: 12px;
}
</style>
```
