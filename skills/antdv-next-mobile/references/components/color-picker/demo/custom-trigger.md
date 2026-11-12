# Custom trigger and form

The default slot replaces the built-in trigger and is often used together with `List`; inside a `Form`, use the built-in trigger directly, validation runs after confirming.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const theme = ref('#1677ff')
const model = reactive<{ color: string | null }>({ color: null })
const rules = [{ required: true, message: 'Please pick a color' }]
</script>

<template>
  <am-list header="With List">
    <am-color-picker v-model:value="theme" value-format="hex" title="Theme color">
      <template #default="{ label, value, toggle }">
        <am-list-item title="Theme color" clickable @click="toggle()">
          <template #extra>
            <span class="demo-extra">
              {{ label }}
              <span class="demo-dot" :style="{ background: value.toRgbString() }" />
            </span>
          </template>
        </am-list-item>
      </template>
    </am-color-picker>
  </am-list>
  <am-form :model="model" header="With Form">
    <am-form-item name="color" label="Tag color" :rules="rules">
      <am-color-picker v-model:value="model.color" value-format="hex" allow-clear show-text />
    </am-form-item>
  </am-form>
</template>

<style scoped>
.demo-extra {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.demo-dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>
```
