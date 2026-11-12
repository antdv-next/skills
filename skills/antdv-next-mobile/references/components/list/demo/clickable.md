# Clickable list

After listening to the `click` event or setting `href`, an item gets press feedback and an arrow on the right automatically; `arrow` and `clickable` can be controlled separately, and `disabled` disables tapping.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <am-list header="Clickable list" :footer="`Clicked ${count} times`">
    <am-list-item @click="count++">
      Tap to trigger an event
    </am-list-item>
    <am-list-item href="https://antdv-next.com" target="_blank" extra="antdv-next.com">
      Link
    </am-list-item>
    <am-list-item :arrow="false" @click="count++">
      Clickable without arrow
    </am-list-item>
    <am-list-item arrow extra="Arrow only">
      Not clickable
    </am-list-item>
    <am-list-item disabled @click="count++">
      Disabled
    </am-list-item>
  </am-list>
</template>
```
