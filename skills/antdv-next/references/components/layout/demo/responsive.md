# 响应式布局

## Description (zh-CN)

a-layout-sider 支持响应式布局。

> 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为 0，会出现特殊 trigger。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { BarsOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@antdv-next/icons'
import { theme } from 'antdv-next'

const { token } = theme.useToken()
const year = new Date().getFullYear()

const items: MenuItemType[] = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon,
    label: `nav ${index + 1}`,
  }),
)

function handleBreakpoint(broken: boolean) {
  console.log(broken)
}

function handleCollapse(collapsed: boolean, type: string) {
  console.log(collapsed, type)
}
</script>

<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      :collapsed-width="0"
      @breakpoint="handleBreakpoint"
      @collapse="handleCollapse"
    >
      <template #trigger>
        <BarsOutlined />
      </template>
      <div class="demo-logo-vertical" />
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['4']"
        :items="items"
      />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="responsive-header" :style="{ background: token.colorBgContainer }" />
      <a-layout-content class="responsive-content">
        <div
          class="responsive-content-box"
          :style="{
            background: token.colorBgContainer,
            borderRadius: `${token.borderRadiusLG}px`,
          }"
        >
          content
        </div>
      </a-layout-content>
      <a-layout-footer class="responsive-footer">
        Antdv Next ©{{ year }} Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.responsive-header {
  padding: 0;
}

.responsive-content {
  margin: 24px 16px 0;
}

.responsive-content-box {
  padding: 24px;
  min-height: 360px;
}

.responsive-footer {
  text-align: center;
}

.demo-logo-vertical {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}
</style>
```
