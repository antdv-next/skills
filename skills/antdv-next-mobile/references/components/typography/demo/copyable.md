# Copyable

`copyable` provides one-tap copying. You can specify the text to copy, customize the icon, and give feedback in the `copy` event.

## Source

```vue
<script setup lang="ts">
import { SmileFilled, SmileOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const tip = ref('Tap the icon after the text to copy')
</script>

<template>
  <am-flex vertical gap="small">
    <am-typography-text copyable @copy="tip = 'Order number copied'">
      Order No. 2026090112345678
    </am-typography-text>
    <am-typography-text :copyable="{ text: 'ANTDV-NEXT-2026' }" @copy="tip = 'Invite code ANTDV-NEXT-2026 copied'">
      Invite code (the copied text differs from what is shown)
    </am-typography-text>
    <am-typography-text
      :copyable="{ icon: [() => h(SmileOutlined), () => h(SmileFilled)] }"
      @copy="tip = 'Copied (custom icon)'"
    >
      Custom copy icon
    </am-typography-text>
    <am-typography-paragraph :ellipsis="{ rows: 2 }" copyable @copy="tip = 'Whole paragraph copied'">
      Truncated text can be copied in full too: Enterprise products at Ant form a large and complex system. They are huge in scale and rich in features, and they change frequently, so design and development have to respond quickly.
    </am-typography-paragraph>
    <am-typography-text type="secondary">
      {{ tip }}
    </am-typography-text>
  </am-flex>
</template>
```
