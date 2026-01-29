# Promise 接口

## Description (zh-CN)

可以通过 then 接口在关闭后运行 callback。以上用例将在每个 message 将要结束时通过 then 显示新的 message。

## Source

```vue
<script setup lang="ts">
import { message } from 'antdv-next'

const [messageApi, ContextHolder] = message.useMessage()
function success() {
  messageApi.open({
    type: 'loading',
    content: 'Action in progress..',
    duration: 2.5,
  }).then(
    () => message.success('Loading finished', 2.5),
  ).then(
    () => message.info('Loading Finished ', 2.5),
  )
}
</script>

<template>
  <ContextHolder />
  <a-button @click="success">
    Display a loading indicator
  </a-button>
</template>
```
