# 形态变体

## Description (zh-CN)

DatePicker 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

## Source

```vue
<template>
  <a-flex vertical :gap="12">
    <a-flex :gap="8">
      <a-date-picker placeholder="Outlined" />
      <a-range-picker :placeholder="['Outlined Start', 'Outlined End']" />
    </a-flex>
    <a-flex :gap="8">
      <a-date-picker placeholder="Filled" variant="filled" />
      <a-range-picker :placeholder="['Filled Start', 'Filled End']" variant="filled" />
    </a-flex>
    <a-flex :gap="8">
      <a-date-picker placeholder="Borderless" variant="borderless" />
      <a-range-picker :placeholder="['Borderless Start', 'Borderless End']" variant="borderless" />
    </a-flex>
    <a-flex :gap="8">
      <a-date-picker placeholder="Underlined" variant="underlined" />
      <a-range-picker :placeholder="['Underlined Start', 'Underlined End']" variant="underlined" />
    </a-flex>
  </a-flex>
</template>
```
