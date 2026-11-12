# Subtitle

Show auxiliary information below the title through `subTitle`. The title is truncated automatically when it is too long.

## Source

```vue
<template>
  <div class="stack">
    <am-nav-bar title="Weekly Report" sub-title="3 people viewing" />
    <am-nav-bar title="This is a very very very very very long page title" sub-title="The subtitle is also truncated when the width is not enough" />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```
