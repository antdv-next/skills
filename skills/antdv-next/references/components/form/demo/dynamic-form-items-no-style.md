# dynamic-form-items-no-style

## Description (zh-CN)

使用 noStyle 组合多个字段。

## Source

```vue
<script setup lang="ts">
import { MinusCircleOutlined, PlusOutlined } from '@antdv-next/icons'
import { reactive } from 'vue'

const model = reactive({
  items: [
    { first: '', last: '' },
  ],
})

function addItem() {
  model.items.push({ first: '', last: '' })
}

function removeItem(index: number) {
  model.items.splice(index, 1)
}
</script>

<template>
  <a-form name="dynamic_form_nest_item_no_style" :model="model" style="max-width: 600px">
    <a-form-item label="Names">
      <a-space direction="vertical" style="width: 100%">
        <a-space
          v-for="(item, index) in model.items"
          :key="`item-${index}`"
          align="baseline"
          style="display: flex"
        >
          <a-form-item
            no-style
            :name="['items', index, 'first']"
            :rules="[{ required: true, message: 'Missing first name' }]"
          >
            <a-input v-model:value="item.first" placeholder="First Name" />
          </a-form-item>
          <a-form-item
            no-style
            :name="['items', index, 'last']"
            :rules="[{ required: true, message: 'Missing last name' }]"
          >
            <a-input v-model:value="item.last" placeholder="Last Name" />
          </a-form-item>
          <MinusCircleOutlined @click="removeItem(index)" />
        </a-space>
      </a-space>
    </a-form-item>

    <a-form-item :label="null">
      <a-button type="dashed" block @click="addItem">
        <template #icon>
          <PlusOutlined />
        </template>
        Add field
      </a-button>
    </a-form-item>
  </a-form>
</template>
```
