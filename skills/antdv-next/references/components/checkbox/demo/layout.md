# 布局

## Description (zh-CN)

CheckboxGroup 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])

function onChange(checkedValues: any[]) {
  console.log('checked = ', checkedValues)
}
</script>

<template>
  <a-checkbox-group v-model:value="value" style="width: 100%" @change="onChange">
    <a-row>
      <a-col :span="8">
        <a-checkbox value="A">
          A
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="B">
          B
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="C">
          C
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="D">
          D
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="E">
          E
        </a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
</template>
```
