# 定制计数能力

## Description (zh-CN)

在某些场景下，需要定制计数能力（例如 emoji 长度以 1 计算），可以通过 `count` 属性来实现。在该模式下，通过 `count.max` 属性来超出原生 `maxLength` 的限制。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import runes from './advance-count-runes'

const value1 = ref('Hello, antdv!')
const value2 = ref('🔥🔥🔥')
const value3 = ref('🔥antdv')
</script>

<template>
  <a-flex vertical gap="16">
    <div>
      <a-typography>
        <a-typography-title :level="5">
          Exceed Max
        </a-typography-title>
      </a-typography>
      <a-input v-model:value="value1" :count="{ show: true, max: 10 }" />
    </div>
    <div>
      <a-typography>
        <a-typography-title :level="5">
          Exceed Max
        </a-typography-title>
      </a-typography>
      <a-input v-model:value="value2" :count="{ show: true, strategy: (txt) => runes(txt).length }" />
    </div>
    <div>
      <a-typography>
        <a-typography-title :level="5">
          Exceed Max
        </a-typography-title>
      </a-typography>
      <a-input
        v-model:value="value3"
        :count="{
          show: true,
          max: 6,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
        }"
      />
    </div>
  </a-flex>
</template>
```
