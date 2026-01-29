---
title: App
subtitle: 包裹组件
description: 提供重置样式和提供消费上下文的默认环境。
---

## 何时使用 
- 提供可消费 provider/inject 的 `message.xxx`、`Modal.xxx`、`notification.xxx` 的静态方法，可以简化 useMessage 等方法需要手动植入 `contextHolder` 的问题。
- 提供基于 `.ant-app` 的默认重置样式，解决原生元素没有 antd 规范样式的问题。

## Demos

| Demo | Path |
| --- | --- |
| 基本用法 | demo/basic.md |
| Hooks 配置 | demo/config.md |

```html
<!-- myPage.vue -->
<template>
  <a-space>
    <a-button type="primary" @click="showMessage">Open message</a-button>
    <a-button type="primary" @click="showModal">Open modal</a-button>
    <a-button type="primary" @click="showNotification">Open notification</a-button>
  </a-space>
</template>

<script setup lang="ts">
  import { App } from 'ant-design-vue';

  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Notification topLeft`,
      description: 'Hello, Antdv Next!!',
      placement: 'topLeft',
    });
  };
</script>
```

```html
<!-- myPage2.vue -->
<script setup lang="ts">
  import { App } from 'antdv-next'

  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showNotification = () => {
    notification.info({
      title: 'Notification',
      description: 'Hello, Antdv Next!!',
    });
  };
</script>

<template>
  <a-space wrap>
    <a-button type="primary" @click="showMessage">
      Message for only one
    </a-button>
    <a-button type="primary" @click="showNotification">
      Notification for bottomLeft
    </a-button>
  </a-space>
</template>

```

## 如何使用 
### 基础用法 
App 组件通过 `provide/inject` 提供上下文方法调用，因而 useApp 需要作为子组件才能使用，我们推荐在应用中顶层包裹 App。

注意：App.useApp 必须在 App 之下方可使用。

### 内嵌使用场景（如无必要，尽量不做嵌套）

```html
<a-app>
  <a-space>
    ...
    <a-app>...</a-app>
  </a-space>
</a-app>
```

#### 与 ConfigProvider 先后顺序

```html
<a-config-provider theme="{{ ... }}">
  <a-app>...</a-app>
</a-config-provider>
```

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| message | App 内 Message 的全局配置 | MessageConfig | - | |
| notification | App 内 Notification 的全局配置 | NotificationConfig | - | |
| component | 设置渲染元素，为 `false` 则不创建 DOM 节点 | any | div | |

## FAQ

### CSS Var 在 `<a-app :component="false">` 内不起作用 
请确保 App 的 `component` 是一个有效的 html 标签名，以便在启用 CSS 变量时有一个容器来承载 CSS 类名。如果不设置，则默认为 `div` 标签，如果设置为 `false`，则不会创建额外的 DOM 节点，也不会提供默认样式。
