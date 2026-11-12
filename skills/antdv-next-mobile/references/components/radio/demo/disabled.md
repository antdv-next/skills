# Disabled

`disabled` can be set on a single `Radio`, or on `Radio.Group` to disable the whole group.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(true)
</script>

<template>
  <am-flex vertical gap="small">
    <am-radio-group default-value="b" :disabled="disabled">
      <am-radio value="a">
        Option A
      </am-radio>
      <am-radio value="b">
        Option B
      </am-radio>
    </am-radio-group>
    <am-radio-group default-value="a">
      <am-radio value="a">
        Enabled
      </am-radio>
      <am-radio value="b" disabled>
        Disabled
      </am-radio>
    </am-radio-group>
    <am-button size="small" @click="disabled = !disabled">
      Toggle disabled of group 1
    </am-button>
  </am-flex>
</template>
```
