# Theme algorithm

`algorithm` supports the light, dark and compact algorithms, which can be combined with an array.

## Source

```vue
<script setup lang="ts">
import { theme } from '@antdv-next/mobile'
import { computed, ref } from 'vue'

const dark = ref(true)
const compact = ref(false)

const algorithm = computed(() => [
  dark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
  ...(compact.value ? [theme.compactAlgorithm] : []),
])
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="large" align="center">
      <am-flex gap="small" align="center">
        Dark <am-switch v-model:checked="dark" />
      </am-flex>
      <am-flex gap="small" align="center">
        Compact <am-switch v-model:checked="compact" />
      </am-flex>
    </am-flex>
    <am-config-provider :theme="{ algorithm }">
      <div class="panel">
        <am-flex vertical gap="small">
          <am-input placeholder="Please enter" />
          <am-flex gap="small">
            <am-button type="primary">
              OK
            </am-button>
            <am-button>Cancel</am-button>
            <am-button danger>
              Delete
            </am-button>
          </am-flex>
        </am-flex>
      </div>
    </am-config-provider>
  </am-flex>
</template>

<style scoped>
.panel {
  padding: var(--am-padding);
  color: var(--am-color-text);
  background: var(--am-color-bg-layout);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius-lg);
}
</style>
```
