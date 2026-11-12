# Checkable tags

`CheckableTag` behaves like a checkbox: tap to toggle the checked state. It supports `v-model:checked` and is commonly used for filter conditions.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ['All', 'Phones', 'Laptops', 'Tablets', 'Audio', 'Accessories']
const selected = ref<string[]>(['Phones'])
const single = ref(true)

function toggle(option: string, checked: boolean) {
  selected.value = checked ? [...selected.value, option] : selected.value.filter(item => item !== option)
}
</script>

<template>
  <am-space vertical size="middle">
    <am-space wrap>
      <am-checkable-tag
        v-for="option in options"
        :key="option"
        :checked="selected.includes(option)"
        @change="toggle(option, $event)"
      >
        {{ option }}
      </am-checkable-tag>
    </am-space>
    <am-space wrap align="center">
      <am-checkable-tag v-model:checked="single" round>
        v-model:checked
      </am-checkable-tag>
      <am-checkable-tag default-checked round size="small">
        Uncontrolled
      </am-checkable-tag>
      <am-checkable-tag disabled round>
        Disabled
      </am-checkable-tag>
    </am-space>
    <span class="tip">Selected: {{ selected.join(', ') || 'None' }}</span>
  </am-space>
</template>

<style scoped>
.tip {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size-sm);
}
</style>
```
