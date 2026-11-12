# Password field

`InputPassword` has a show / hide toggle button, which can be controlled with `v-model:icon-visible`. `iconRender` customizes the icon and `visibilityToggle` turns the toggle off.

## Source

```vue
<script setup lang="ts">
import { LockOutlined, UnlockOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <am-flex vertical gap="small">
    <am-input-password placeholder="Please enter password" />
    <am-input-password v-model:icon-visible="visible" default-value="antdv-next" placeholder="Controlled visibility">
      <template #iconRender="{ visible: shown }">
        <UnlockOutlined v-if="shown" />
        <LockOutlined v-else />
      </template>
    </am-input-password>
    <am-input-password placeholder="No toggle button" :visibility-toggle="false" />
    <am-button size="small" @click="visible = !visible">
      {{ visible ? 'Hide' : 'Show' }} second password
    </am-button>
  </am-flex>
</template>
```
