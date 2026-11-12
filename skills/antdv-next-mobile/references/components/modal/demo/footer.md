# Custom footer

Set `footer` to `null` to hide the footer, together with `closable`; or fully customize it through the `footer` slot, whose params provide the `ok` and `cancel` methods.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const noFooter = ref(false)
const custom = ref(false)
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="noFooter = true">
      No footer + close button
    </am-button>
    <am-button block @click="custom = true">
      Custom footer
    </am-button>
  </am-flex>
  <am-modal v-model:open="noFooter" title="Notice" :footer="null" closable>
    No footer buttons. Tap the top-right icon or the mask to close.
  </am-modal>
  <am-modal v-model:open="custom" title="Claim coupon" @ok="custom = false">
    You got a ￥20 coupon.
    <template #footer="{ ok, cancel }">
      <am-flex vertical gap="small">
        <am-button type="primary" block shape="round" @click="ok">
          Claim now
        </am-button>
        <am-button type="text" block @click="cancel">
          No, thanks
        </am-button>
      </am-flex>
    </template>
  </am-modal>
</template>
```
