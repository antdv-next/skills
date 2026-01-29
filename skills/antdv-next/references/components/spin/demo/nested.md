# 卡片加载中

## Description (zh-CN)

可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
</script>

<template>
  <a-flex gap="middle" vertical>
    <a-spin :spinning="loading">
      <a-alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </a-spin>
    <a-flex align="center" gap="small">
      <span>Loading state:</span>
      <a-switch v-model:checked="loading" />
    </a-flex>
  </a-flex>
</template>
```
