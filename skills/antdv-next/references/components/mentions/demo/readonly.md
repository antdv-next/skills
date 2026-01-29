# 无效或只读

## Description (zh-CN)

通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。

## Source

```vue
<script setup lang="ts">
import type { MentionsProps } from 'antdv-next'

const options: MentionsProps['options'] = ['afc163', 'zombiej', 'yesmeck'].map(value => ({
  value,
  key: value,
  label: value,
}))
</script>

<template>
  <a-flex vertical gap="middle">
    <a-mentions
      style="width: 100%"
      placeholder="this is disabled Mentions"
      disabled
      :options="options"
    />
    <a-mentions
      style="width: 100%"
      placeholder="this is readOnly Mentions"
      readonly
      :options="options"
    />
  </a-flex>
</template>
```
