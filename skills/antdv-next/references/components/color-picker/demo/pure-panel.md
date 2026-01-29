# pure-panel

## Source

```vue
<script setup lang="ts">
import { ColorPicker } from 'antdv-next'
import { shallowRef } from 'vue'

const PureRenderColorPicker = (ColorPicker as any)._InternalPanelDoNotUseOrYouWillBeFired

const color = shallowRef('#1677ff')
</script>

<template>
  <div class="ml-100px">
    <PureRenderColorPicker v-model:value="color" />
  </div>
</template>
```
