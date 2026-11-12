# Custom trigger and form

The default slot replaces the built-in trigger and is often used with `List`; inside `Form`, use the built-in trigger directly: it is rendered as borderless cell content automatically and triggers validation after the value is committed.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const languages = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
  { label: '日本語', value: 'ja-JP' },
]
const language = ref('zh-CN')

const model = reactive<{ type: string | null, tags: string[] }>({ type: null, tags: [] })
const types = ['Suggestion', 'Experience', 'Bug', 'Other'].map(label => ({ label, value: label }))
const tags = ['Home', 'Orders', 'Payment', 'Profile', 'Support'].map(label => ({ label, value: label }))
</script>

<template>
  <am-list header="With List">
    <am-select v-model:value="language" :options="languages" title="Language">
      <template #default="{ label, toggle }">
        <am-list-item title="Language" :extra="label" clickable @click="toggle()" />
      </template>
    </am-select>
  </am-list>
  <am-form :model="model" header="With Form">
    <am-form-item name="type" label="Type" :rules="[{ required: true, message: 'Please select a type' }]">
      <am-select v-model:value="model.type" :options="types" title="Feedback type" placeholder="Please select" />
    </am-form-item>
    <am-form-item name="tags" label="Modules">
      <am-select v-model:value="model.tags" :options="tags" mode="multiple" :max-tag-count="2" title="Related modules" placeholder="Multiple" />
    </am-form-item>
  </am-form>
</template>
```
