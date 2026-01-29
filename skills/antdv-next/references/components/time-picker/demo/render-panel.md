# render-panel

## Description (zh-CN)

调试用组件，请勿直接使用。

## Source

```vue
<script setup lang="ts">
import { TimePicker } from 'antdv-next'

const InternalTimePicker = TimePicker._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalTimePicker />
</template>
```
