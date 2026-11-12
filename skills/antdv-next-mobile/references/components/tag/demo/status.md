# Status tags

Five preset status colors: `success`, `processing`, `warning`, `error`, `default`, for representing the status of orders, tasks, etc.

## Source

```vue
<script setup lang="ts">
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from '@antdv-next/icons'
</script>

<template>
  <am-space vertical size="middle">
    <am-space wrap>
      <am-tag color="success">
        Done
      </am-tag>
      <am-tag color="processing">
        In progress
      </am-tag>
      <am-tag color="warning">
        Pending
      </am-tag>
      <am-tag color="error">
        Failed
      </am-tag>
      <am-tag color="default">
        Not started
      </am-tag>
    </am-space>
    <am-space wrap>
      <am-tag color="success">
        <template #icon>
          <CheckCircleOutlined />
        </template>
        Done
      </am-tag>
      <am-tag color="processing">
        <template #icon>
          <SyncOutlined spin />
        </template>
        In progress
      </am-tag>
      <am-tag color="warning">
        <template #icon>
          <ExclamationCircleOutlined />
        </template>
        Pending
      </am-tag>
      <am-tag color="error">
        <template #icon>
          <CloseCircleOutlined />
        </template>
        Failed
      </am-tag>
      <am-tag color="default">
        <template #icon>
          <ClockCircleOutlined />
        </template>
        Not started
      </am-tag>
    </am-space>
  </am-space>
</template>
```
