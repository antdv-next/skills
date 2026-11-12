# Axis and magnetic

`axis` restricts the drag direction, `magnetic` snaps the element to the nearest edge of that axis after release, and `gap` sets the minimal distance to the edges, per side if needed.

## Source

```vue
<script setup lang="ts">
import { CustomerServiceOutlined } from '@antdv-next/icons'
</script>

<template>
  <div class="demo-box">
    <am-draggable class="demo-drag" axis="x" :style="{ top: '16px', left: '16px' }">
      <am-tag color="blue">
        Horizontal only
      </am-tag>
    </am-draggable>
    <am-draggable class="demo-drag" axis="y" :style="{ top: '56px', left: '16px' }">
      <am-tag color="green">
        Vertical only
      </am-tag>
    </am-draggable>
    <am-draggable class="demo-drag" magnetic="x" :gap="{ top: 8, right: 12, bottom: 8, left: 12 }" :style="{ right: '12px', bottom: '24px' }">
      <span class="demo-ball">
        <CustomerServiceOutlined />
      </span>
    </am-draggable>
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

.demo-drag {
  position: absolute;
}

.demo-ball {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--am-color-text-light-solid);
  font-size: 22px;
  background: var(--am-color-primary);
  border-radius: 50%;
  box-shadow: var(--am-box-shadow-secondary);
}
</style>
```
