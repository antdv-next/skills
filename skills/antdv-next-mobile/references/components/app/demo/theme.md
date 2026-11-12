# Follow the ConfigProvider theme

With `App` below a `ConfigProvider`, the instances from `useApp()` follow its theme and locale, which the global static methods cannot do. The `message` / `notification` / `toast` props set the default config of these instances.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import MyPage from './my-page.vue'

const dark = ref(true)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small" align="center">
      Dark <am-switch v-model:checked="dark" />
    </am-flex>
    <am-config-provider
      :theme="{ algorithm: dark ? 'dark' : 'default', token: { colorPrimary: '#722ed1' } }"
    >
      <am-app
        class="panel"
        :message="{ maxCount: 1 }"
        :notification="{ placement: 'bottom', showProgress: true }"
        :toast="{ position: 'bottom' }"
      >
        <MyPage />
      </am-app>
    </am-config-provider>
  </am-flex>
</template>

<style scoped>
.panel {
  padding: var(--am-padding);
  background: var(--am-color-bg-layout);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius-lg);
}
</style>
```
