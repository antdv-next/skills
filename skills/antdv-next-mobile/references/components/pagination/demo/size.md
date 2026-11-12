# Size and disabled

`size` provides three sizes, and `disabled` disables the pagination.

## Source

```vue
<template>
  <am-flex vertical gap="large">
    <am-pagination size="small" :total="50" :default-current="2" />
    <am-pagination size="large" :total="50" :default-current="2" />
    <am-pagination disabled :total="50" :default-current="2" />
    <am-pagination disabled simple :total="50" :default-current="2" />
  </am-flex>
</template>
```
