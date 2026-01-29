# 全屏

## Description (zh-CN)

`fullscreen` 属性非常适合创建流畅的页面加载器。它添加了半透明覆盖层，并在其中心放置了一个旋转加载符号。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const spinning = ref(false)
const percent = ref(0)

function showLoader() {
  spinning.value = true
  let ptg = -10

  const interval = setInterval(() => {
    ptg += 5
    percent.value = ptg

    if (ptg > 120) {
      clearInterval(interval)
      spinning.value = false
      percent.value = 0
    }
  }, 100)
}
</script>

<template>
  <div>
    <a-button @click="showLoader">
      Show fullscreen
    </a-button>
    <a-spin :spinning="spinning" :percent="percent" fullscreen />
  </div>
</template>
```
