# Login form

The most basic login form: `model` binds the data, `FormItem` is bound to a field through `name` and declares validation with `rules`. A button with `htmlType="submit"` triggers validation, then `finish` when it passes or `finishFailed` when it fails.

## Source

```vue
<script setup lang="ts">
import { LockOutlined, UserOutlined } from '@antdv-next/icons'
import { reactive, ref } from 'vue'

const model = reactive({ username: '', password: '', remember: true })
const result = ref('')

function onFinish(values: Record<string, any>) {
  result.value = `finish: ${JSON.stringify(values)}`
}

function onFinishFailed({ errorFields }: { errorFields: { name: (string | number)[], errors: string[] }[] }) {
  result.value = `finishFailed: ${errorFields.map(field => field.errors[0]).join('; ')}`
}
</script>

<template>
  <am-form :model="model" name="login" @finish="onFinish" @finish-failed="onFinishFailed">
    <am-form-item name="username" label="Account" :rules="[{ required: true, message: 'Please enter your account' }]">
      <am-input v-model:value="model.username" placeholder="Phone / Email" allow-clear>
        <template #prefix>
          <UserOutlined />
        </template>
      </am-input>
    </am-form-item>
    <am-form-item name="password" label="Password" :rules="[{ required: true, message: 'Please enter your password' }]">
      <am-input-password v-model:value="model.password" placeholder="Please enter">
        <template #prefix>
          <LockOutlined />
        </template>
      </am-input-password>
    </am-form-item>
    <am-form-item name="remember" label="Remember" content-align="end">
      <am-switch v-model:checked="model.remember" />
    </am-form-item>
    <template #footer>
      <am-button type="primary" html-type="submit" block>
        Log in
      </am-button>
      <p v-if="result" style="margin: 12px 0 0; font-size: 12px; word-break: break-all; color: var(--am-color-text-tertiary)">
        {{ result }}
      </p>
    </template>
  </am-form>
</template>
```
