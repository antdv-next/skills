# Component size and disabled

`componentSize` and `componentDisabled` control the size and disabled state of the inner components in one place.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const size = ref<'small' | 'middle' | 'large'>('middle')
const disabled = ref(false)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented
      v-model:value="size"
      block
      :options="[{ label: 'Small', value: 'small' }, { label: 'Middle', value: 'middle' }, { label: 'Large', value: 'large' }]"
    />
    <am-flex gap="small" align="center">
      Disabled <am-switch v-model:checked="disabled" />
    </am-flex>
    <am-config-provider :component-size="size" :component-disabled="disabled">
      <am-flex vertical gap="small">
        <am-input placeholder="Please enter" />
        <am-flex gap="small" align="center" wrap>
          <am-button type="primary">
            Button
          </am-button>
          <am-button>Button</am-button>
          <am-switch />
        </am-flex>
      </am-flex>
    </am-config-provider>
  </am-flex>
</template>
```
