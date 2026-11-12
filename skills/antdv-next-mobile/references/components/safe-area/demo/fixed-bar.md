# Bottom action bar

The most common scenario: put a `SafeArea` at the end of a bottom action bar, so that the background of the bar extends to the bottom of the screen and the buttons are not covered by the home indicator.

## Source

```vue
<template>
  <div class="page">
    <div class="content">
      Product details
    </div>
    <div class="bar">
      <div class="bar-inner">
        <span class="price">Total: <b>¥ 199.00</b></span>
        <am-button type="primary" shape="round">
          Place order
        </am-button>
      </div>
      <am-safe-area position="bottom" />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 240px;
  background: var(--am-color-bg-layout);
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: var(--am-color-text-tertiary);
  font-size: var(--am-font-size);
}

.bar {
  background: var(--am-color-bg-container);
  border-top: 1px solid var(--am-color-split);
}

.bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: var(--am-color-text);
  font-size: var(--am-font-size);
}

.price b {
  color: var(--am-color-error);
  font-size: var(--am-font-size-lg);
}
</style>
```
