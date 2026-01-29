# component-token

## Description (zh-CN)

通过配置 `ConfigProvider` 的 `theme` 属性来自定义分割线组件的 Token。

## Source

```vue
<template>
  <a-config-provider
    :theme="{
      token: {
        margin: 24,
        marginLG: 48,
        lineWidth: 5,
        colorSplit: '#1677ff',
      },
      components: {
        Divider: {
          verticalMarginInline: 16,
          textPaddingInline: 16,
          orientationMargin: 0.2,
        },
      },
    }"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider>Text</a-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider title-placement="left">
      Left Text
    </a-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider title-placement="right">
      Right Text
    </a-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider title-placement="left" :styles="{ content: { margin: '0px' } }">
      Left Text margin with 0
    </a-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <a-divider title-placement="right" :styles="{ content: { margin: '50px' } }">
      Right Text margin with 50px
    </a-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </a-config-provider>
</template>
```
