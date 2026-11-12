# With other components

The `extra` and default slots of an item can hold any component, such as a switch, an input or a button.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const wifi = ref(true)
const bluetooth = ref(false)
const name = ref('')
</script>

<template>
  <am-list header="With switch">
    <am-list-item>
      Wi-Fi
      <template #extra>
        <am-switch v-model:checked="wifi" />
      </template>
    </am-list-item>
    <am-list-item description="Discoverable by nearby devices when on">
      Bluetooth
      <template #extra>
        <am-switch v-model:checked="bluetooth" />
      </template>
    </am-list-item>
  </am-list>
  <am-list header="With input and button">
    <am-list-item>
      <template #prefix>
        Device name
      </template>
      <am-input v-model:value="name" variant="borderless" placeholder="Please enter" />
    </am-list-item>
    <am-list-item>
      Firmware 1.2.0
      <template #extra>
        <am-button size="small" type="primary">
          Update
        </am-button>
      </template>
    </am-list-item>
  </am-list>
</template>
```
