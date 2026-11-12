# Actions and footer

Each node in the `actions` slot becomes an equally divided item of the bottom action bar; `footer` is a free-form footer.

## Source

```vue
<script setup lang="ts">
import { EditOutlined, LikeOutlined, ShareAltOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-space vertical block size="middle">
    <am-card title="Today">
      Card actions on mobile usually sit at the bottom for one-handed taps.
      <template #actions>
        <span><LikeOutlined /> Like</span>
        <span><EditOutlined /> Comment</span>
        <span><ShareAltOutlined /> Share</span>
      </template>
    </am-card>
    <am-card title="Order 2024080800001" extra="Unpaid">
      @antdv-next/mobile custom T-shirt × 1
      <template #footer>
        <am-flex justify="flex-end" gap="small">
          <am-button size="small" shape="round">
            Cancel order
          </am-button>
          <am-button size="small" shape="round" type="primary">
            Pay now
          </am-button>
        </am-flex>
      </template>
    </am-card>
  </am-space>
</template>
```
