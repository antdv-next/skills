# Contains sub component

Skeleton contains sub components: the content of the default slot is shown when `loading` is `false`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

function showSkeleton() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-skeleton :loading="loading" active avatar>
      <div class="article">
        <img class="article-avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="avatar">
        <div>
          <h4>Ant Design Mobile for Vue</h4>
          <p>
            We provide a complete set of design principles and components that help teams build consistent, beautiful mobile interfaces quickly.
          </p>
        </div>
      </div>
    </am-skeleton>
    <am-button type="primary" block :disabled="loading" @click="showSkeleton">
      Show skeleton
    </am-button>
  </am-flex>
</template>

<style scoped>
.article {
  display: flex;
  gap: 16px;
  color: var(--am-color-text);
}

.article-avatar {
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.article h4 {
  margin: 0 0 8px;
  font-size: var(--am-font-size-lg);
}

.article p {
  margin: 0;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
  line-height: var(--am-line-height);
}
</style>
```
