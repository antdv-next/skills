# Vertical group

Set `vertical` (or `orientation="vertical"`) to join members vertically, commonly used for a group of actions or inputs stacked on top of each other.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const account = ref('')
const password = ref('')
</script>

<template>
  <am-flex vertical gap="middle">
    <am-space-compact vertical block>
      <am-input v-model:value="account" placeholder="Account" />
      <am-input-password v-model:value="password" placeholder="Password" />
    </am-space-compact>

    <am-space-compact vertical block>
      <am-button block>
        Take photo
      </am-button>
      <am-button block>
        Choose from album
      </am-button>
      <am-button block danger>
        Remove avatar
      </am-button>
    </am-space-compact>
  </am-flex>
</template>
```
