# Suffix with feedback debug

## Description (en-US)

Suffix with form feedback debug.

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-form layout="vertical" :style="{ maxWidth: '320px' }">
    <a-form-item label="Suffix with feedback" validate-status="success" has-feedback>
      <a-input-number :default-value="100" suffix="RMB" :style="{ width: '100%' }" />
    </a-form-item>
  </a-form>
</template>
```
