# 上中下布局

## Description (zh-CN)

最基本的『上-中-下』布局。

一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

## Source

```vue
<script setup lang="ts">
import type { BreadcrumbItemType, MenuItemType } from 'antdv-next'
import { theme } from 'antdv-next'

const { token } = theme.useToken()
const year = new Date().getFullYear()

const items: MenuItemType[] = Array.from({ length: 15 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}))

const breadcrumbItems: BreadcrumbItemType[] = [
  { title: 'Home' },
  { title: 'List' },
  { title: 'App' },
]
</script>

<template>
  <a-layout>
    <a-layout-header class="demo-header">
      <div class="demo-logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :items="items"
        class="demo-menu"
      />
    </a-layout-header>
    <a-layout-content class="demo-content">
      <a-breadcrumb class="demo-breadcrumb" :items="breadcrumbItems" />
      <div
        class="demo-content-box"
        :style="{
          background: token.colorBgContainer,
          borderRadius: `${token.borderRadiusLG}px`,
        }"
      >
        Content
      </div>
    </a-layout-content>
    <a-layout-footer class="demo-footer">
      Antdv Next ©{{ year }} Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.demo-header {
  display: flex;
  align-items: center;
}

.demo-menu {
  flex: 1;
  min-width: 0;
}

.demo-content {
  padding: 0 48px;
}

.demo-breadcrumb {
  margin: 16px 0;
}

.demo-content-box {
  min-height: 280px;
  padding: 24px;
}

.demo-footer {
  text-align: center;
}

.demo-logo {
  width: 120px;
  height: 32px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}
</style>
```
