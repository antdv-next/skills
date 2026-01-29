# 静态方法

## Description (zh-CN)

静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 modal 实例。

## Source

```vue
<script setup lang="ts">
import { Modal } from 'antdv-next'
import { h } from 'vue'

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: h('div', [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...'),
    ]),
    onOk() {},
  })
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  })
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  })
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  })
}
</script>

<template>
  <a-space wrap>
    <a-button @click="info">
      Info
    </a-button>
    <a-button @click="success">
      Success
    </a-button>
    <a-button @click="error">
      Error
    </a-button>
    <a-button @click="warning">
      Warning
    </a-button>
  </a-space>
</template>
```
