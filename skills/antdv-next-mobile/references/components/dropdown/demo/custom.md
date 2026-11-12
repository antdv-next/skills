# Custom panel

Customize the panel content with the default slot. With `showFooter` enabled, "Reset / Confirm" buttons are shown at the bottom of the panel (the text comes from the locale), and the panel collapses automatically after Confirm is clicked. The `close` slot param can also be used to collapse the panel.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const tags = ['Free shipping', 'Easy returns', 'Same day', 'In stock', 'New', 'Discount']
const draft = ref<string[]>([])
const applied = ref<string[]>([])
const sort = ref('default')
const state = reactive({ onlyStock: false })

const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Newest', value: 'new' },
]

function toggle(tag: string) {
  draft.value = draft.value.includes(tag) ? draft.value.filter(t => t !== tag) : [...draft.value, tag]
}

function confirm() {
  applied.value = [...draft.value]
}
</script>

<template>
  <am-dropdown>
    <am-dropdown-item key="sort" v-model:value="sort" :options="sortOptions" />
    <am-dropdown-item
      key="filter"
      title="Filter"
      :highlight="applied.length > 0"
      show-footer
      @confirm="confirm"
      @reset="draft = []"
    >
      <div class="tags">
        <span
          v-for="tag in tags"
          :key="tag"
          class="tag"
          :class="{ active: draft.includes(tag) }"
          @click="toggle(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </am-dropdown-item>
    <am-dropdown-item key="more" title="More">
      <template #default="{ close }">
        <div class="more">
          <p>Any content can go here.</p>
          <am-button
            type="primary"
            size="small"
            @click="() => { state.onlyStock = !state.onlyStock; close() }"
          >
            {{ state.onlyStock ? 'Show all' : 'In stock only' }} and close
          </am-button>
        </div>
      </template>
    </am-dropdown-item>
  </am-dropdown>
  <div class="page">
    Selected: {{ applied.length ? applied.join(', ') : 'None' }}
  </div>
</template>

<style scoped>
.tags {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px;
}

.tag {
  padding: 8px 0;
  text-align: center;
  background: var(--am-color-fill-tertiary);
  border-radius: var(--am-border-radius);
}

.tag.active {
  color: var(--am-color-primary);
  background: var(--am-color-primary-bg);
}

.more {
  padding: 16px;
}

.more p {
  margin: 0 0 12px;
}

.page {
  padding: 48px 16px;
  color: var(--am-color-text-secondary);
  text-align: center;
}
</style>
```
