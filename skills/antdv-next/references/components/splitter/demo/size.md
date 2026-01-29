# 基础用法

## Description (zh-CN)

通过 `defaultSize` 设置默认大小，使用 `min` 和 `max` 限制面板的大小。

## Source

```vue
<template>
  <a-splitter style="height: 200px;box-shadow: 0 0 10px rgba(0,0,0,0.1)">
    <a-splitter-panel default-size="40%" min="20%" max="70%">
      <a-flex justify="center" align="center" style="height: 100%">
        <a-typography-title type="secondary" :level="5" style="white-space: nowrap">
          First
        </a-typography-title>
      </a-flex>
    </a-splitter-panel>
    <a-splitter-panel>
      <a-flex justify="center" align="center" style="height: 100%">
        <a-typography-title type="secondary" :level="5" style="white-space: nowrap">
          Second
        </a-typography-title>
      </a-flex>
    </a-splitter-panel>
  </a-splitter>
</template>
```
