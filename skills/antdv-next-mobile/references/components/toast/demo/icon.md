# Icon

`Toast.success()` and `Toast.fail()` come with preset icons, and a custom icon can also be passed through `icon`.

## Source

```vue
<script setup lang="ts">
import { HeartFilled } from '@antdv-next/icons'
import { Toast } from '@antdv-next/mobile'
import { h } from 'vue'

function custom() {
  Toast.show({ content: 'Starred', icon: () => h(HeartFilled) })
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="Toast.success('Saved')">
      Success
    </am-button>
    <am-button @click="Toast.fail('Save failed')">
      Fail
    </am-button>
    <am-button @click="custom">
      Custom icon
    </am-button>
  </am-flex>
</template>
```
