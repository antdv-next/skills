# use-config-display

## Source

```vue
<script setup lang="ts">
import { useConfig } from 'antdv-next/config-provider/context'

const config = useConfig()
</script>

<template>
  <a-form-item label="componentSize value">
    <a-input :value="config.componentSize" />
  </a-form-item>
  <a-form-item label="componentDisabled value">
    <a-input :value="String(config.componentDisabled)" :disabled="config.componentDisabled" />
  </a-form-item>
</template>
```
