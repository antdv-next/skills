# Vertical layout

With `layout="vertical"` the label is above the control, which suits long labels or controls needing more width; a `FormItem` can override it individually with `layout`. In horizontal layout the alignment can be adjusted with `labelWidth`, `labelAlign`, `colon` and `contentAlign`.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const layout = ref<'horizontal' | 'vertical'>('vertical')
const model = reactive({ title: '', content: '', type: ['bug'], anonymous: false })
const layoutOptions = [
  { label: 'Vertical', value: 'vertical' },
  { label: 'Horizontal', value: 'horizontal' },
]
const typeOptions = [
  { label: 'Bug', value: 'bug' },
  { label: 'Feature', value: 'feature' },
  { label: 'Other', value: 'other' },
]
</script>

<template>
  <div style="padding: 12px 16px">
    <am-radio-group v-model:value="layout" :options="layoutOptions" option-type="button" button-style="solid" size="small" />
  </div>
  <am-form :model="model" :layout="layout" :label-width="72" header="Feedback">
    <am-form-item name="title" label="Title" :rules="[{ required: true }]">
      <am-input v-model:value="model.title" placeholder="Describe the issue in one line" />
    </am-form-item>
    <am-form-item name="type" label="Type">
      <am-selector v-model:value="model.type" :options="typeOptions" :columns="3" />
    </am-form-item>
    <am-form-item name="content" label="Details" :rules="[{ required: true }]">
      <am-textarea v-model:value="model.content" :auto-size="{ minRows: 3, maxRows: 6 }" :maxlength="200" show-count placeholder="Describe the problem you ran into" />
    </am-form-item>
    <am-form-item name="anonymous" label="Anonymous" layout="horizontal" content-align="end">
      <am-switch v-model:checked="model.anonymous" />
    </am-form-item>
    <template #footer>
      <am-button type="primary" html-type="submit" block>
        Submit
      </am-button>
    </template>
  </am-form>
</template>
```
