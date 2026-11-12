# Multiple selection

`mode="multiple"` enables multiple selection: check options in the popup and tap "OK" to commit. `maxCount` limits the number of selectable items, `maxTagCount` limits the number shown in the trigger, and `maxTagPlaceholder` customizes the omitted text.

## Source

```vue
<script setup lang="ts">
import type { SelectLabeledValue } from '@antdv-next/mobile'
import { ref } from 'vue'

const options = ['Reading', 'Music', 'Movies', 'Travel', 'Photography', 'Fitness', 'Food', 'Games'].map(label => ({ label, value: label }))
const hobbies = ref(['Reading', 'Travel'])
const limited = ref(['Music', 'Movies', 'Photography'])

const maxTagPlaceholder = (omitted: SelectLabeledValue[]) => `${omitted.length + 2} in all`
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="hobbies" :options="options" mode="multiple" title="Hobbies" placeholder="Please select" allow-clear />
    <am-select
      v-model:value="limited"
      :options="options"
      mode="multiple"
      :max-count="3"
      :max-tag-count="2"
      :max-tag-placeholder="maxTagPlaceholder"
      title="Up to 3 items"
    />
  </am-flex>
</template>
```
