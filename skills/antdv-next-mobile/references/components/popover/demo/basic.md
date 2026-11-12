# Basic usage

The simplest usage: tap the trigger element to show the popover, and touch anywhere else to close it. `title` and `content` are supported, as well as the same-named slots.

## Source

```vue
<template>
  <am-flex gap="small" wrap>
    <am-popover content="Popover content" placement="topLeft">
      <am-button>Tap me</am-button>
    </am-popover>
    <am-popover title="Title" content="Popover with a title" placement="top">
      <am-button>Title</am-button>
    </am-popover>
    <am-popover placement="topRight">
      <template #content>
        <div class="content">
          <p>Custom content via slot</p>
          <am-button type="primary" size="small">
            Action
          </am-button>
        </div>
      </template>
      <am-button>Slot</am-button>
    </am-popover>
  </am-flex>
</template>

<style scoped>
.content p {
  margin: 0 0 8px;
}
</style>
```
