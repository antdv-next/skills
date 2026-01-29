# 表单布局

## Description (zh-CN)

通过切换布局展示表单的三种排列方式。

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive({
  layout: 'horizontal',
  fieldA: '',
  fieldB: '',
})
</script>

<template>
  <a-form
    :model="model"
    :layout="model.layout as any"
    :style="{ maxWidth: model.layout === 'inline' ? 'none' : '600px' }"
  >
    <a-form-item label="Form Layout" name="layout">
      <a-radio-group v-model:value="model.layout">
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Field A" name="fieldA">
      <a-input v-model:value="model.fieldA" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item label="Field B" name="fieldB">
      <a-input v-model:value="model.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :label="null">
      <a-button type="primary">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>
```
