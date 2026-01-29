# 触发器尺寸大小

## Description (zh-CN)

触发器有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把触发器设为大、小尺寸。若不设置 `size`，则尺寸默认为中。

## Source

```vue
<template>
  <a-space>
    <a-space vertical>
      <a-color-picker default-value="#1677ff" size="small" />
      <a-color-picker default-value="#1677ff" />
      <a-color-picker default-value="#1677ff" size="large" />
    </a-space>
    <a-space vertical>
      <a-color-picker default-value="#1677ff" size="small" show-text />
      <a-color-picker default-value="#1677ff" show-text />
      <a-color-picker default-value="#1677ff" size="large" show-text />
    </a-space>
  </a-space>
</template>
```
