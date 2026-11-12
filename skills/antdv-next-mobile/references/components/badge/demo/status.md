# Status dot

Used standalone with `status` or `color` set, it is displayed as a status dot; combine it with `text` to describe a status.

## Source

```vue
<template>
  <am-space vertical>
    <am-badge status="success" text="Done" />
    <am-badge status="processing" text="In progress" />
    <am-badge status="warning" text="Pending" />
    <am-badge status="error" text="Failed" />
    <am-badge status="default" text="Not started" />
    <am-badge color="purple" text="Custom color purple" />
    <am-badge color="#f50" text="Custom color #f50" />
  </am-space>
</template>
```
