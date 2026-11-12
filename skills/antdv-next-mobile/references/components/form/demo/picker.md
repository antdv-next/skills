# With pickers

Picker components such as `Picker`, `DatePicker`, `Cascader` and `Select` automatically use the borderless variant inside a form, align with inputs, and trigger `change` validation after a selection. Add `arrow` to a `FormItem` to hint that the row opens a popup.

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive<{ gender?: string, birthday?: string, city: string[], education: string[], hobbies: string[] }>({
  gender: undefined,
  birthday: undefined,
  city: [],
  education: [],
  hobbies: [],
})

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Secret', value: 'secret' },
]
const educationColumns = [['High school', 'Associate', 'Bachelor', 'Master', 'Doctor'].map(label => ({ label, value: label }))]
const cityOptions = [
  {
    label: 'Zhejiang',
    value: 'zhejiang',
    children: [
      { label: 'Hangzhou', value: 'hangzhou', children: [{ label: 'Xihu', value: 'xihu' }, { label: 'Yuhang', value: 'yuhang' }] },
      { label: 'Ningbo', value: 'ningbo', children: [{ label: 'Yinzhou', value: 'yinzhou' }] },
    ],
  },
  {
    label: 'Jiangsu',
    value: 'jiangsu',
    children: [{ label: 'Nanjing', value: 'nanjing', children: [{ label: 'Xuanwu', value: 'xuanwu' }] }],
  },
]
const hobbyOptions = ['Reading', 'Sports', 'Music', 'Travel', 'Photography'].map(label => ({ label, value: label }))
</script>

<template>
  <am-form :model="model" content-align="end">
    <am-form-item name="gender" label="Gender" arrow :rules="[{ required: true, message: 'Please select your gender' }]">
      <am-select v-model:value="model.gender" :options="genderOptions" title="Gender" placeholder="Please select" :suffix-icon="null" />
    </am-form-item>
    <am-form-item name="birthday" label="Birthday" arrow :rules="[{ required: true, message: 'Please select your birthday' }]">
      <am-date-picker v-model:value="model.birthday" value-format="YYYY-MM-DD" title="Birthday" placeholder="Please select" :suffix-icon="null" />
    </am-form-item>
    <am-form-item name="education" label="Education" arrow>
      <am-picker v-model:value="model.education" :columns="educationColumns" title="Education" placeholder="Please select" :suffix-icon="null" />
    </am-form-item>
    <am-form-item name="city" label="Region" arrow :rules="[{ required: true, type: 'array', message: 'Please select your region' }]">
      <am-cascader v-model:value="model.city" :options="cityOptions" title="Region" placeholder="Please select" :suffix-icon="null" />
    </am-form-item>
    <am-form-item name="hobbies" label="Hobbies" arrow>
      <am-select v-model:value="model.hobbies" mode="multiple" :options="hobbyOptions" title="Hobbies" placeholder="Multiple" :suffix-icon="null" />
    </am-form-item>
    <template #footer>
      <am-button type="primary" html-type="submit" block>
        Save
      </am-button>
    </template>
  </am-form>
</template>
```
