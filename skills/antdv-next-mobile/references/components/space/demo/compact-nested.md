# Nesting and form

`Space.Compact` can be nested: the inner one continues the outer group, and only the outermost edges of the whole keep rounded corners. Inside a form, the fields in a group use the bordered style automatically.

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ area: '+86', phone: '', code: '' })
const areas = [
  { label: '+86', value: '+86', description: 'Chinese mainland' },
  { label: '+852', value: '+852', description: 'Hong Kong, China' },
  { label: '+1', value: '+1', description: 'United States' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-space-compact block>
      <am-space-addon>Filter</am-space-addon>
      <am-space-compact>
        <am-button>All</am-button>
        <am-button color="primary" variant="filled">
          Active
        </am-button>
        <am-button>Done</am-button>
      </am-space-compact>
    </am-space-compact>

    <am-form :model="form" mode="card" layout="vertical">
      <am-form-item label="Phone" name="phone">
        <am-space-compact block>
          <am-select v-model:value="form.area" :options="areas" title="Country / Region" style="flex: 0 0 96px" />
          <am-input v-model:value="form.phone" placeholder="Phone number" inputmode="tel" />
        </am-space-compact>
      </am-form-item>
      <am-form-item label="Code" name="code">
        <am-space-compact block>
          <am-input v-model:value="form.code" placeholder="6-digit code" inputmode="numeric" />
          <am-button type="primary">
            Get code
          </am-button>
        </am-space-compact>
      </am-form-item>
    </am-form>
  </am-flex>
</template>
```
