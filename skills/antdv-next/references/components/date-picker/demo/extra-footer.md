# 额外的页脚

## Description (zh-CN)

在浮层中加入额外的页脚，以满足某些定制信息的需求。

## Source

```vue
<template>
  <a-space vertical :size="12">
    <a-date-picker>
      <template #renderExtraFooter>
        extra footer
      </template>
    </a-date-picker>
    <a-date-picker show-time>
      <template #renderExtraFooter>
        extra footer
      </template>
    </a-date-picker>
    <a-range-picker>
      <template #renderExtraFooter>
        extra footer
      </template>
    </a-range-picker>
    <a-range-picker show-time>
      <template #renderExtraFooter>
        extra footer
      </template>
    </a-range-picker>
    <a-date-picker picker="month">
      <template #renderExtraFooter>
        extra footer
      </template>
    </a-date-picker>
  </a-space>
</template>
```
