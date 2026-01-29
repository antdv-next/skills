# warning

## Description (zh-CN)

调整 warning 策略。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-typography-title :level="4">
    Open single page to check the console
  </a-typography-title>
  <a-config-provider :warning="{ strict: false }">
    <a-alert close-text="deprecated" />
    <a-space-compact>
      <a-input placeholder="Before" />
      <a-input placeholder="After" />
    </a-space-compact>
  </a-config-provider>
</template>
```
