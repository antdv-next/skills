# Instance methods

Call the form instance methods through a `ref`: `validate` / `validateFields(nameList?)`, `resetFields`, `clearValidate`, `setFieldsValue`, `getFieldsValue`, `scrollToField`. A button with `htmlType="reset"` is equivalent to `resetFields()`.

## Source

```vue
<script setup lang="ts">
import type { FormInstance } from '@antdv-next/mobile'
import { reactive, ref } from 'vue'

const formRef = ref<FormInstance>()
const model = reactive({ name: 'John', age: 18, bio: '' })
const output = ref('')

async function validateName() {
  try {
    const values = await formRef.value!.validateFields(['name'])
    output.value = `Passed: ${JSON.stringify(values)}`
  }
  catch (error: any) {
    output.value = `Failed: ${error.message}`
  }
}

function fill() {
  formRef.value?.setFieldsValue({ name: 'Jim', age: 28, bio: 'Hello @antdv-next/mobile' })
}

function read() {
  output.value = JSON.stringify(formRef.value?.getFieldsValue())
}
</script>

<template>
  <am-form ref="formRef" :model="model">
    <am-form-item name="name" label="Name" :rules="[{ required: true }]">
      <am-input v-model:value="model.name" placeholder="Please enter your name" allow-clear />
    </am-form-item>
    <am-form-item name="age" label="Age" :rules="[{ type: 'number', min: 18, message: 'Must be at least 18' }]">
      <am-input-number v-model:value="model.age" :min="0" :max="120" />
    </am-form-item>
    <am-form-item name="bio" label="Bio" :rules="[{ required: true }]">
      <am-textarea v-model:value="model.bio" auto-size placeholder="Introduce yourself" />
    </am-form-item>
    <template #footer>
      <am-flex gap="small" wrap>
        <am-button size="small" type="primary" html-type="submit">
          submit
        </am-button>
        <am-button size="small" html-type="reset">
          reset
        </am-button>
        <am-button size="small" @click="validateName">
          validateFields(['name'])
        </am-button>
        <am-button size="small" @click="formRef?.clearValidate()">
          clearValidate
        </am-button>
        <am-button size="small" @click="fill">
          setFieldsValue
        </am-button>
        <am-button size="small" @click="read">
          getFieldsValue
        </am-button>
      </am-flex>
      <p v-if="output" style="margin: 12px 0 0; font-size: 12px; word-break: break-all; color: var(--am-color-text-tertiary)">
        {{ output }}
      </p>
    </template>
  </am-form>
</template>
```
