# Locale

Switch the language of the built-in component texts through `locale`.

## Source

```vue
<script setup lang="ts">
import enUS from '@antdv-next/mobile/locale/en_US'
import zhCN from '@antdv-next/mobile/locale/zh_CN'
import { computed, ref } from 'vue'

const lang = ref('zh')
const locale = computed(() => (lang.value === 'zh' ? zhCN : enUS))
const open = ref(false)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented v-model:value="lang" block :options="[{ label: '中文', value: 'zh' }, { label: 'English', value: 'en' }]" />
    <am-config-provider :locale="locale">
      <am-flex vertical gap="small">
        <am-empty />
        <am-button block @click="open = true">
          Modal
        </am-button>
        <am-modal v-model:open="open" title="Locale">
          okText / cancelText
        </am-modal>
      </am-flex>
    </am-config-provider>
  </am-flex>
</template>
```
