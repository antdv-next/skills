# Standalone

When no content is wrapped, the badge is displayed as a standalone element, commonly on the right side of a list item.

## Source

```vue
<template>
  <am-space size="middle" align="center">
    <am-badge :count="11" />
    <am-badge :count="25" color="var(--am-color-fill)" :styles="{ indicator: { color: 'var(--am-color-text-secondary)', boxShadow: 'none' } }" />
    <am-badge :count="109" color="green" />
    <am-badge count="hot" color="volcano" />
    <am-badge dot />
  </am-space>
</template>
```
