# Twelve placements

There are twelve placements, the same as on PC. When there is not enough space it flips to the opposite side automatically and stays within the screen.

## Source

```vue
<script setup lang="ts">
import type { PopoverPlacement } from '@antdv-next/mobile'

const top: PopoverPlacement[] = ['topLeft', 'top', 'topRight']
const bottom: PopoverPlacement[] = ['bottomLeft', 'bottom', 'bottomRight']
const left: PopoverPlacement[] = ['leftTop', 'left', 'leftBottom']
const right: PopoverPlacement[] = ['rightTop', 'right', 'rightBottom']
</script>

<template>
  <div class="grid">
    <div class="row">
      <am-popover v-for="item in top" :key="item" :placement="item" :content="item">
        <am-button size="small" class="cell">
          {{ item }}
        </am-button>
      </am-popover>
    </div>
    <div class="middle">
      <div class="col">
        <am-popover v-for="item in left" :key="item" :placement="item" :content="item">
          <am-button size="small" class="cell">
            {{ item }}
          </am-button>
        </am-popover>
      </div>
      <div class="col">
        <am-popover v-for="item in right" :key="item" :placement="item" :content="item">
          <am-button size="small" class="cell">
            {{ item }}
          </am-button>
        </am-popover>
      </div>
    </div>
    <div class="row">
      <am-popover v-for="item in bottom" :key="item" :placement="item" :content="item">
        <am-button size="small" class="cell">
          {{ item }}
        </am-button>
      </am-popover>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.row {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.middle {
  display: flex;
  justify-content: space-between;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cell {
  width: 96px;
  padding: 0;
  font-size: 12px;
}
</style>
```
