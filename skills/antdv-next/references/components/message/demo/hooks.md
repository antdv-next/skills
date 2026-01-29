# Hooks 用法（推荐）

## Description (zh-CN)

通过 `message.useMessage` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `message` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

## Source

```vue
<script setup lang="ts">
import { message } from 'antdv-next'

const [messageApi, ContextHolder] = message.useMessage()

function info() {
  messageApi.info('Hello, Antdv Next!')
}
</script>

<template>
  <ContextHolder />
  <a-button type="primary" @click="info">
    Display normal message
  </a-button>
</template>
```
