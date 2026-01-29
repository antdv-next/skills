# component-token

## Description (zh-CN)

自定义组件 Token。

## Source

```vue
<script lang="ts" setup>
const theme = {
  components: {
    Timeline: {
      tailColor: 'red',
      tailWidth: 10,
      dotBorderWidth: 1,
      dotBg: 'yellow',
      dotSize: 20,
      itemPaddingBottom: 10,
    },
  },
}

const items = [
  {
    content: 'Create a services site 2015-09-01',
  },
  {
    content: 'Solve initial network problems 2015-09-01',
  },
  {
    content: 'Technical testing 2015-09-01',
  },
  {
    content: 'Network problems being solved 2015-09-01',
  },
]
</script>

<template>
  <a-config-provider :theme="theme">
    <a-timeline :items="items" />
  </a-config-provider>
</template>
```
