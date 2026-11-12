# Basic usage

Simple display, one column per row by default on mobile.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 'name', label: 'UserName', content: 'Zhou Maomao' },
  { key: 'phone', label: 'Telephone', content: '181 0000 0000' },
  { key: 'city', label: 'Live', content: 'Hangzhou, Zhejiang' },
  { key: 'address', label: 'Address', content: 'No. 18 Wantang Road, Xihu District, Hangzhou, Zhejiang' },
]
</script>

<template>
  <am-descriptions title="User Info" :items="items">
    <template #extra>
      <am-button type="link" size="small">
        Edit
      </am-button>
    </template>
  </am-descriptions>
</template>
```
