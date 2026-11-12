# Ghost button

A ghost button inverts the color of its content and makes the background transparent. It is commonly used on colored backgrounds.

## Source

```vue
<template>
  <div class="ghost-demo">
    <am-flex gap="small" wrap>
      <am-button type="primary" ghost>
        Primary
      </am-button>
      <am-button ghost>
        Default
      </am-button>
      <am-button type="primary" danger ghost>
        Danger
      </am-button>
    </am-flex>
  </div>
</template>

<style scoped>
.ghost-demo {
  padding: 16px;
  background: linear-gradient(135deg, #1f2937, #4b5563);
  border-radius: 8px;
}
</style>
```
