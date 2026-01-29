# render-panel

## Source

```vue
<script setup lang="ts">
import { Select } from 'antdv-next'
import { ref } from 'vue'

const open = ref(true)

const InternalSelect = (Select as any)._InternalPanelDoNotUseOrYouWillBeFired

const options = [
  { label: 'Jack', value: 'jack' },
  { label: 'Lucy', value: 'lucy' },
  { label: 'Disabled', value: 'disabled' },
  { label: 'Bamboo', value: 'bamboo' },
]
</script>

<template>
  <a-flex vertical gap="small" align="start">
    <a-switch v-model:checked="open" />
    <InternalSelect value="lucy" style="width: 120px" :open="open" :options="options" :virtual="false" />
  </a-flex>
</template>
```
