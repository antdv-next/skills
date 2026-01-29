# 选择确认

## Description (zh-CN)

TimePicker 默认会根据 `picker` 的交互行为，自动选择是否需要确认按钮。你也可以通过 `needConfirm` 属性来手动设置是否需要确认按钮。当有 `needConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

## Source

```vue
<script setup lang="ts">
function onChange(time: any, timeString: string) {
  console.log(time, timeString)
}
</script>

<template>
  <a-time-picker need-confirm @change="onChange" />
</template>
```
