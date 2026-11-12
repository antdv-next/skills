# Vertical layout

A vertical list with the label above the content, which can be combined with `column` and `bordered`.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 'name', label: 'UserName', content: 'Zhou Maomao' },
  { key: 'phone', label: 'Telephone', content: '181 0000 0000' },
  { key: 'address', label: 'Address', content: 'No. 18 Wantang Road, Xihu District, Hangzhou, Zhejiang', span: 2 },
]
</script>

<template>
  <am-flex vertical gap="large">
    <am-descriptions title="Vertical" layout="vertical" :column="2" :items="items" />
    <am-descriptions title="Vertical Bordered" layout="vertical" bordered :column="2" :items="items" />
  </am-flex>
</template>
```
