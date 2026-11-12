# Search input and textarea

`Input.Search` and `TextArea` can take part in a group too. In a group the search input becomes a bordered segment (it is still the rounded filled style when used alone); a textarea stretches the row it is in, and the buttons in the same row follow its height.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const city = ref('hz')
const keyword = ref('')
const title = ref('')
const content = ref('')
const reply = ref('')

const cities = [
  { label: 'Hangzhou', value: 'hz' },
  { label: 'Shanghai', value: 'sh' },
  { label: 'Beijing', value: 'bj' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-space-compact block>
      <am-select v-model:value="city" :options="cities" title="Select city" style="flex: 0 0 92px" />
      <am-input-search v-model:value="keyword" placeholder="Hotels / landmarks" />
      <am-button type="primary">
        Search
      </am-button>
    </am-space-compact>

    <am-space-compact vertical block>
      <am-input v-model:value="title" placeholder="Title" />
      <am-textarea v-model:value="content" placeholder="Say something..." :rows="3" />
      <am-button type="primary" block>
        Post
      </am-button>
    </am-space-compact>

    <am-space-compact block>
      <am-textarea v-model:value="reply" placeholder="Reply" :auto-size="{ minRows: 1, maxRows: 4 }" />
      <am-button type="primary">
        Send
      </am-button>
    </am-space-compact>
  </am-flex>
</template>
```
