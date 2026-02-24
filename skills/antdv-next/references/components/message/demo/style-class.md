# Custom semantic dom styling

## Description (en-US)

## Source

```vue
<script setup lang="ts">
import { message } from 'antdv-next'

const [messageApi, ContextHolder] = message.useMessage()

const classes = {
  root: 'custom-message-root',
  icon: 'custom-message-icon',
}

const stylesObject = {
  icon: { fontSize: '20px' },
}

function stylesFn(info: any) {
  if (info.props.type === 'success') {
    return {
      root: {
        border: '1px solid #eee',
        display: 'inline-flex',
        borderRadius: '10px',
        overflow: 'hidden',
      },
    }
  }
  return {}
}

function showObjectStyle() {
  messageApi.open({
    type: 'info',
    content: 'This is a message with object classes and styles',
    classes,
    styles: stylesObject,
  })
}

function showFunctionStyle() {
  messageApi.open({
    type: 'success',
    content: 'This is a message with function classes and styles',
    classes,
    styles: stylesFn,
    duration: 60,
  })
}
</script>

<template>
  <ContextHolder />
  <a-space>
    <a-button @click="showObjectStyle">
      Object style
    </a-button>
    <a-button type="primary" @click="showFunctionStyle">
      Function style
    </a-button>
  </a-space>
</template>

<style>
.custom-message-root {
  padding: 8px 12px;
}

.custom-message-icon {
  line-height: 1;
}
</style>
```
