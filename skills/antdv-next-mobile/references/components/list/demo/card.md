# Card mode

`mode="card"` renders a card group with rounded corners and horizontal margins, commonly used in settings pages.

## Source

```vue
<script setup lang="ts">
function noop() {}
</script>

<template>
  <am-list mode="card" header="Account">
    <am-list-item extra="John" @click="noop">
      Nickname
    </am-list-item>
    <am-list-item extra="138****8888" @click="noop">
      Phone
    </am-list-item>
  </am-list>
  <am-list mode="card" header="General" footer="In card mode the header and footer align with the content">
    <am-list-item extra="English" @click="noop">
      Language
    </am-list-item>
    <am-list-item extra="System" @click="noop">
      Dark mode
    </am-list-item>
    <am-list-item extra="128 MB" @click="noop">
      Clear cache
    </am-list-item>
  </am-list>
</template>
```
