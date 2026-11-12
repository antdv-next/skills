# Custom action area

The `left` / `right` slots fully customize the action area, e.g. with icon buttons. Custom content has to call `close()` itself to close.

## Source

```vue
<script setup lang="ts">
import { DeleteOutlined, StarOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const swipeRef = ref()
const starred = ref(false)

function toggleStar() {
  starred.value = !starred.value
  swipeRef.value?.close()
}
</script>

<template>
  <am-swipe-action ref="swipeRef">
    <div class="cell">
      <span>Custom actions</span>
      <span class="cell-extra">{{ starred ? 'Starred' : 'Not starred' }}</span>
    </div>
    <template #right>
      <div class="actions">
        <button type="button" class="round star" @click="toggleStar">
          <StarOutlined />
        </button>
        <button type="button" class="round delete" @click="swipeRef?.close()">
          <DeleteOutlined />
        </button>
      </div>
    </template>
  </am-swipe-action>
</template>

<style scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  min-height: 52px;
  padding: 12px 16px;
  color: var(--am-color-text);
  font-size: 16px;
  background: var(--am-color-bg-container);
}

.cell-extra {
  color: var(--am-color-text-description);
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 12px;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  background: var(--am-color-fill-tertiary);
}

.round {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  color: #fff;
  font-size: 16px;
  border: 0;
  border-radius: 50%;
}

.star {
  background: var(--am-color-warning);
}

.delete {
  background: var(--am-color-error);
}
</style>
```
