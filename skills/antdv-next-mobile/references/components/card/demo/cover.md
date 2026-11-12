# Cover and meta

Place a cover through the `cover` slot, and use `Card.Meta` (`<am-card-meta>`) to show an avatar, a title and a description.

## Source

```vue
<template>
  <am-card>
    <template #cover>
      <img alt="cover" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
    </template>
    <am-card-meta title="Europe Street beat" description="www.instagram.com">
      <template #avatar>
        <am-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </am-card-meta>
  </am-card>
</template>
```
