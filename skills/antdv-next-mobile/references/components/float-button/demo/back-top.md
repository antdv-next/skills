# Back to top

`BackTop` (`<am-back-top>`) appears after scrolling past `visibilityHeight` and smoothly returns to the top when tapped. It listens to `window` by default; use `target` to specify the scroll container.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const scroller = ref<HTMLElement>()
</script>

<template>
  <div class="demo-box">
    <div ref="scroller" class="scroller">
      <p v-for="i in 40" :key="i">
        Scroll down · Row {{ i }}
      </p>
    </div>
    <am-back-top
      :target="() => scroller!"
      :visibility-height="200"
      type="primary"
      :style="{ position: 'absolute' }"
    />
  </div>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

.scroller {
  height: 100%;
  overflow-y: auto;
}

.scroller p {
  margin: 0;
  padding: 10px 16px;
  color: var(--am-color-text-secondary);
}

/* The component variables are declared on the root of the float button (group), so override them on that element */
.demo-box > .am-float-button,
.demo-box > .am-float-button-group {
  --am-float-button-inset-block-end: 24px;
}
</style>
```
