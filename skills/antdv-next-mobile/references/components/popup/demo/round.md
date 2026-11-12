# Rounded corners and close icon

`round` enables rounded corners and `closable` shows a close icon. The icon can also be customized with the `closeIcon` prop or slot.

## Source

```vue
<script setup lang="ts">
import { CloseCircleFilled } from '@antdv-next/icons'
import { ref } from 'vue'

const round = ref(false)
const custom = ref(false)
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="round = true">
      Round + close icon
    </am-button>
    <am-button block @click="custom = true">
      Custom close icon
    </am-button>
  </am-flex>
  <am-popup v-model:open="round" round closable height="40%">
    <div class="content">
      Round popup
    </div>
  </am-popup>
  <am-popup v-model:open="custom" round closable height="40%">
    <template #closeIcon>
      <CloseCircleFilled />
    </template>
    <div class="content">
      Custom close icon
    </div>
  </am-popup>
</template>

<style scoped>
.content {
  padding: 48px 16px;
  text-align: center;
}
</style>
```
