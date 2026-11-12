# Variants

Set the three variants filled (default), solid and outlined with `variant`; the outline is removed when `bordered` is `false`.

## Source

```vue
<script setup lang="ts">
const colors = [undefined, 'blue', 'success', 'error', '#722ed1']
const variants = ['filled', 'solid', 'outlined'] as const
</script>

<template>
  <am-space vertical size="middle">
    <am-space v-for="variant in variants" :key="variant" wrap>
      <am-tag v-for="color in colors" :key="color ?? 'default'" :variant="variant" :color="color">
        {{ variant }}
      </am-tag>
    </am-space>
    <am-space wrap>
      <am-tag v-for="color in colors" :key="color ?? 'default'" variant="outlined" :bordered="false" :color="color">
        borderless
      </am-tag>
    </am-space>
  </am-space>
</template>
```
