# Prefix, suffix and count

Add a prefix / suffix with the `prefix` / `suffix` props or the same-named slots; `showCount` together with `maxlength` shows the character count; `align` controls the text alignment.

## Source

```vue
<script setup lang="ts">
import { MobileOutlined, UserOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const amount = ref('99.00')
const sending = ref(false)

function send() {
  sending.value = true
  setTimeout(() => {
    sending.value = false
  }, 2000)
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-input placeholder="Username" :maxlength="12" show-count>
      <template #prefix>
        <UserOutlined />
      </template>
    </am-input>
    <am-input v-model:value="amount" prefix="¥" suffix="CNY" inputmode="decimal" align="end" />
    <am-input placeholder="SMS code" inputmode="numeric" :maxlength="6">
      <template #prefix>
        <MobileOutlined />
      </template>
      <template #suffix>
        <am-button type="link" size="small" :loading="sending" @click="send">
          Get code
        </am-button>
      </template>
    </am-input>
  </am-flex>
</template>
```
