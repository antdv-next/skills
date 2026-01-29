# 形态变体

## Description (zh-CN)

TimePicker 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-flex vertical :gap="12">
    <a-flex :gap="8">
      <a-time-picker placeholder="Outlined" />
      <a-time-range-picker :placeholder="['Outlined Start', 'Outlined End']" />
    </a-flex>
    <a-flex :gap="8">
      <a-time-picker variant="filled" placeholder="Filled" />
      <a-time-range-picker variant="filled" :placeholder="['Filled Start', 'Filled End']" />
    </a-flex>
    <a-flex :gap="8">
      <a-time-picker variant="borderless" placeholder="Borderless" />
      <a-time-range-picker variant="borderless" :placeholder="['Borderless Start', 'Borderless End']" />
    </a-flex>
    <a-flex :gap="8">
      <a-time-picker variant="underlined" placeholder="Underlined" />
      <a-time-range-picker variant="underlined" :placeholder="['Underlined Start', 'Underlined End']" />
    </a-flex>
  </a-flex>
</template>
```
