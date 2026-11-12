# Icon, description and extra content

`prefix` holds an icon or an avatar, `description` shows the description, and `extra` shows the content on the right. The separator is automatically left-aligned with the title.

## Source

```vue
<script setup lang="ts">
import { BellOutlined, CreditCardOutlined, SafetyOutlined, SettingOutlined } from '@antdv-next/icons'

function noop() {}
</script>

<template>
  <am-list header="With icon">
    <am-list-item @click="noop">
      <template #prefix>
        <CreditCardOutlined class="icon" />
      </template>
      Bills
    </am-list-item>
    <am-list-item extra="On" @click="noop">
      <template #prefix>
        <BellOutlined class="icon" />
      </template>
      Notifications
    </am-list-item>
    <am-list-item @click="noop">
      <template #prefix>
        <SettingOutlined class="icon" />
      </template>
      Settings
    </am-list-item>
  </am-list>

  <am-list header="With description">
    <am-list-item description="Manage passwords, payment and devices" @click="noop">
      <template #prefix>
        <span class="avatar"><SafetyOutlined /></span>
      </template>
      Account and security
    </am-list-item>
    <am-list-item description="This is a fairly long description that wraps onto the next line automatically instead of being truncated" extra="Details" @click="noop">
      <template #prefix>
        <span class="avatar">A</span>
      </template>
      Title
    </am-list-item>
  </am-list>
</template>

<style scoped>
.icon {
  color: var(--am-color-primary);
  font-size: 20px;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--am-color-primary);
  font-size: 18px;
  background: var(--am-color-primary-bg);
  border-radius: 50%;
}
</style>
```
