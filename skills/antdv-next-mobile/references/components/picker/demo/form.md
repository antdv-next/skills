# In a form

Inside a `Form` it automatically uses the `borderless` variant and aligns with inputs; committing a value triggers `change` validation, and closing the popup triggers `blur` validation.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const formRef = ref()
const model = reactive<{ name: string, education: string[], city: string[] }>({ name: '', education: [], city: [] })

const educations = [['High school', 'Associate', 'Bachelor', 'Master', 'Doctorate'].map(label => ({ label, value: label }))]
const cities = [['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou'].map(label => ({ label, value: label }))]

function submit() {
  formRef.value?.validate().catch(() => {})
}
</script>

<template>
  <am-form ref="formRef" :model="model">
    <am-form-item name="name" label="Name" :rules="[{ required: true, message: 'Please enter your name' }]">
      <am-input v-model:value="model.name" placeholder="Please enter" />
    </am-form-item>
    <am-form-item name="education" label="Education" :rules="[{ required: true, type: 'array', message: 'Please select your education' }]">
      <am-picker v-model:value="model.education" :columns="educations" title="Education" placeholder="Please select" />
    </am-form-item>
    <am-form-item name="city" label="City">
      <am-picker v-model:value="model.city" :columns="cities" title="City" placeholder="Please select" allow-clear />
    </am-form-item>
    <template #footer>
      <am-button type="primary" block @click="submit">
        Submit
      </am-button>
    </template>
  </am-form>
</template>
```
