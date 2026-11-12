# Text and icon

Show text or icons inside the switch with the `checkedChildren` and `unCheckedChildren` props or the same-named slots.

## Source

```vue
<script setup lang="ts">
import { CheckOutlined, CloseOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-switch checked-children="On" un-checked-children="Off" default-checked />
    <am-switch checked-children="1" un-checked-children="0" />
    <am-switch default-checked>
      <template #checkedChildren>
        <CheckOutlined />
      </template>
      <template #unCheckedChildren>
        <CloseOutlined />
      </template>
    </am-switch>
  </am-flex>
</template>
```
