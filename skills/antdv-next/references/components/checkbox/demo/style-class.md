# 自定义语义结构的样式和类

## Description (zh-CN)

通过 `classes` 和 `styles` 传入对象/函数可以自定义 Checkbox 的[语义化结构](#semantic-dom)样式。

## Source

```vue
<script setup lang="ts">
import type { CheckboxProps } from 'antdv-next'
import { theme } from 'antdv-next'
import { ref } from 'vue'

const checked = ref(true)
const { token } = theme.useToken()

const classes: CheckboxProps['classes'] = {
  root: 'checkbox-demo-root',
}

const stylesObject: CheckboxProps['styles'] = {
  root: {
    padding: '8px',
    borderRadius: '4px',
    borderColor: '#ccc',
  },
}

const stylesFn: CheckboxProps['styles'] = (info) => {
  if (info.props.checked) {
    return {
      root: { padding: '8px', borderRadius: '4px' },
      label: { fontWeight: 'bold', color: '#333' },
    }
  }
  return {}
}

const fnClasses = {
  root: 'checkbox-demo-fn-root',
}
</script>

<template>
  <a-flex vertical gap="middle">
    <a-checkbox :classes="classes" :styles="stylesObject">
      Object
    </a-checkbox>
    <a-checkbox
      v-model:checked="checked"
      :classes="fnClasses"
      :styles="stylesFn"
    >
      Function
    </a-checkbox>
  </a-flex>
</template>

<style>
.checkbox-demo-root {
  border-radius: v-bind('`${token.borderRadius}px`');
  width: 300px;
}

.checkbox-demo-fn-root {
  border-radius: v-bind('`${token.borderRadius}px`');
  width: 300px;
}

.checkbox-demo-fn-root:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox.ant-wave-target .ant-checkbox-inner,
.checkbox-demo-fn-root .ant-checkbox-checked:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
  border-color: #161616;
  background-color: #161616;
}

.checkbox-demo-fn-root .ant-checkbox-checked .ant-checkbox-inner {
  border-color: #161616;
  background-color: #161616;
}

.checkbox-demo-fn-root:hover .ant-checkbox-inner {
  border-color: #d9d9d9;
}
</style>
```
