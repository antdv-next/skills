# 自定义页脚

## Description (zh-CN)

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const open = ref(false)

function showModal() {
  open.value = true
}

function handleOk() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 3000)
}

function handleCancel() {
  open.value = false
}
</script>

<template>
  <a-button type="primary" @click="showModal">
    Open Modal with customized footer
  </a-button>
  <a-modal
    v-model:open="open"
    title="Title"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #footer>
      <a-button key="back" @click="handleCancel">
        Return
      </a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
        Submit
      </a-button>
      <a-button key="link" href="https://google.com" target="_blank" type="primary" :loading="loading" @click="handleOk">
        Search on Google
      </a-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
```
