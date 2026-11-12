# Custom content

The default slot places any content above the action list, and the `action` slot customizes how each action is rendered. With `closeOnAction` set to `false`, clicking an action does not close the panel automatically.

## Source

```vue
<script setup lang="ts">
import type { ActionSheetAction } from '@antdv-next/mobile'
import { CheckOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const open = ref(false)
const selected = ref('wechat')
const actions: ActionSheetAction[] = [
  { key: 'wechat', text: 'WeChat Pay' },
  { key: 'alipay', text: 'Alipay' },
  { key: 'card', text: 'Bank card' },
]
</script>

<template>
  <am-button block @click="open = true">
    Custom content
  </am-button>
  <am-action-sheet
    v-model:open="open"
    :actions="actions"
    :close-on-action="false"
    cancel-text="Done"
    @action="selected = String($event.key)"
  >
    <div class="amount">
      <small>Amount</small>
      <strong>¥ 128.00</strong>
    </div>
    <template #action="{ action }">
      <span class="pay-item">
        {{ action.text }}
        <CheckOutlined v-if="selected === action.key" class="pay-check" />
      </span>
    </template>
  </am-action-sheet>
</template>

<style scoped>
.amount {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  padding: 20px 16px;
  color: var(--am-color-text);
}

.amount small {
  color: var(--am-color-text-secondary);
}

.amount strong {
  font-size: 28px;
}

.pay-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.pay-check {
  color: var(--am-color-primary);
}
</style>
```
