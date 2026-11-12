# Controlled expansion

Use `v-model:activeKey` to control which item is expanded, and set it to `null` to collapse; you can also call the `close()` method of the instance. With `closeOnMaskClick` set to `false`, clicking the mask does not collapse the panel.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const activeKey = ref<string | number | null>(null)
const value = ref('a')
const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
]
</script>

<template>
  <am-dropdown v-model:active-key="activeKey" :close-on-mask-click="false">
    <am-dropdown-item key="first" v-model:value="value" title="First" :options="options" />
    <am-dropdown-item key="second" title="Second">
      <div class="panel">
        <p>Tapping the mask does not close it</p>
        <am-button type="primary" size="small" @click="activeKey = null">
          Close
        </am-button>
      </div>
    </am-dropdown-item>
  </am-dropdown>
  <div class="page">
    <p>activeKey: {{ activeKey ?? 'null' }}</p>
    <am-flex gap="small" justify="center">
      <am-button size="small" @click="activeKey = 'first'">
        Open first
      </am-button>
      <am-button size="small" @click="activeKey = 'second'">
        Open second
      </am-button>
    </am-flex>
  </div>
</template>

<style scoped>
.panel {
  padding: 16px;
}

.panel p {
  margin: 0 0 12px;
}

.page {
  padding: 24px 16px 48px;
  color: var(--am-color-text-secondary);
  text-align: center;
}
</style>
```
