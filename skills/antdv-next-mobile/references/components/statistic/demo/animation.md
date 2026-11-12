# Number animation

`animation` counts from 0 up to the value on mount, then rolls from the current number to every new value. Pass an object to set the duration, the start value and the easing.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const users = ref(112893)
const balance = ref(8846.5)

function change() {
  users.value += Math.round(Math.random() * 20000)
  balance.value = Math.round(Math.random() * 2000000) / 100
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="large">
      <am-statistic title="Active Users" :value="users" animation />
      <am-statistic title="Balance (CNY)" :value="balance" :precision="2" :animation="{ duration: 2000 }" />
    </am-flex>
    <am-button block @click="change">
      Change values
    </am-button>
  </am-flex>
</template>
```
