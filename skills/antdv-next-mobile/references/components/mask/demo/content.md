# Custom content

The content of the default slot is shown above the mask. Clicking the content neither triggers the `click` event nor closes the mask.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <am-button block @click="open = true">
    Show mask with content
  </am-button>
  <am-mask v-model:open="open" closable>
    <div class="wrapper">
      <div class="card">
        <p>Tapping the card does not close it</p>
        <am-button type="primary" size="small" @click="open = false">
          Got it
        </am-button>
      </div>
    </div>
  </am-mask>
</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  width: 220px;
  padding: 24px 16px;
  color: var(--am-color-text);
  text-align: center;
  background: var(--am-color-bg-elevated);
  border-radius: var(--am-border-radius-lg);
}

.card p {
  margin: 0 0 16px;
}
</style>
```
