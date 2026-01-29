# prefix-cls

## Description (zh-CN)

修改组件和图标前缀。

## Source

```vue
<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const prefixCls = ref('light')

function togglePrefix() {
  prefixCls.value = prefixCls.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <a-button style="margin-bottom: 12px" type="primary" @click="togglePrefix">
    toggle prefixCls
  </a-button>
  <br>
  <a-config-provider :prefix-cls="prefixCls" icon-prefix-cls="bamboo">
    <SmileOutlined />
    <a-select style="width: 120px" />
    <a-radio>test</a-radio>
    <a-checkbox>test</a-checkbox>
  </a-config-provider>
</template>
```
