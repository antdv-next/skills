# Closable

Set `closable` to show the close button. Tapping it triggers the `close` event and hides the tag automatically; in a data-driven list, call `event.preventDefault()` and let the data decide whether to remove it.

## Source

```vue
<script setup lang="ts">
import { CloseCircleFilled } from '@antdv-next/icons'
import { ref } from 'vue'

const tags = ref(['Vue', 'TypeScript', 'Vite', 'Vitest'])

function remove(event: MouseEvent, tag: string) {
  event.preventDefault()
  tags.value = tags.value.filter(item => item !== tag)
}
</script>

<template>
  <am-space vertical size="middle">
    <am-space wrap>
      <am-tag
        v-for="tag in tags"
        :key="tag"
        color="blue"
        size="large"
        closable
        @close="remove($event, tag)"
      >
        {{ tag }}
      </am-tag>
      <am-button v-if="tags.length < 4" size="small" type="link" @click="tags = ['Vue', 'TypeScript', 'Vite', 'Vitest']">
        Reset
      </am-button>
    </am-space>
    <am-space wrap>
      <am-tag closable>
        Auto hide
      </am-tag>
      <am-tag color="error" closable>
        <template #closeIcon>
          <CloseCircleFilled />
        </template>
        Custom icon
      </am-tag>
    </am-space>
  </am-space>
</template>
```
