# Search

`showSearch` shows a search box at the top of the popup, filtering by `label` and `description` by default. For remote search, set `:filter-option="false"`, update `options` in the `search` event, and use `loading` to show the loading state.

## Source

```vue
<script setup lang="ts">
import type { SelectOption } from '@antdv-next/mobile'
import { ref } from 'vue'

const cities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou', 'Nanjing', 'Suzhou', 'Chengdu', 'Chongqing', 'Wuhan', 'Xian', 'Changsha', 'Qingdao', 'Xiamen']
  .map(label => ({ label, value: label }))
const city = ref<string | null>(null)

const user = ref<string | null>(null)
const users = ref<SelectOption[]>([])
const loading = ref(false)
let timer: ReturnType<typeof setTimeout>

function onSearch(keyword: string) {
  clearTimeout(timer)
  if (!keyword) {
    users.value = []
    loading.value = false
    return
  }
  loading.value = true
  timer = setTimeout(() => {
    users.value = Array.from({ length: 4 }, (_, index) => ({
      label: `${keyword}${index + 1}`,
      value: `${keyword}${index + 1}`,
      description: `${keyword}${index + 1}@example.com`,
    }))
    loading.value = false
  }, 600)
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="city" :options="cities" show-search title="Select city" placeholder="Local search" />
    <am-select
      v-model:value="user"
      :options="users"
      :show-search="{ placeholder: 'Search by name' }"
      :filter-option="false"
      :loading="loading"
      not-found-content="Type a keyword to search"
      title="Select member"
      placeholder="Remote search"
      @search="onSearch"
    />
  </am-flex>
</template>
```
