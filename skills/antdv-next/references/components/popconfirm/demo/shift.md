# 贴边偏移

## Description (zh-CN)

当 Popconfirm 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

## Source

```vue
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight
    document.documentElement.scrollLeft = document.documentElement.clientWidth
  }, 10)
})
</script>

<template>
  <div class="h-300vh w-300vw flex items-center justify-center">
    <a-popconfirm title="Thanks for using antd. Have a nice day !" open>
      <a-button type="primary">
        Scroll The Window
      </a-button>
    </a-popconfirm>
  </div>
</template>
```
