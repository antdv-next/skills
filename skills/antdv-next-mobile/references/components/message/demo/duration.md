# Customize duration

Customize the duration (in seconds) with the second argument; the default is 3 seconds. When set to `0` the message is not closed automatically, and `message.destroy()` can be called to close them all.

## Source

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="message.success('This message stays for 10 seconds', 10)">
      Show for 10s
    </am-button>
    <am-button @click="message.info('This message will not close automatically', 0)">
      Never auto close
    </am-button>
    <am-button danger @click="message.destroy()">
      Close all
    </am-button>
  </am-flex>
</template>
```
