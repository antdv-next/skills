# 静态确认对话框

## Description (zh-CN)

使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。

## Source

```vue
<script setup lang="ts">
import { ExclamationCircleFilled } from '@antdv-next/icons'
import { Modal } from 'antdv-next'
import { h } from 'vue'

const confirm = Modal.confirm
function showConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    icon: h(ExclamationCircleFilled),
    content: 'Some descriptions',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

function showPromiseConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    icon: h(ExclamationCircleFilled),
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      }).catch(() => console.log('Oops errors!'))
    },
    onCancel() {},
  })
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    icon: h(ExclamationCircleFilled),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    icon: h(ExclamationCircleFilled),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}
</script>

<template>
  <a-space wrap>
    <a-button @click="showConfirm">
      Confirm
    </a-button>
    <a-button @click="showPromiseConfirm">
      With Confirm
    </a-button>
    <a-button type="dashed" @click="showDeleteConfirm">
      Delete
    </a-button>
    <a-button type="dashed" @click="showPropsConfirm">
      With extra props
    </a-button>
  </a-space>
</template>
```
