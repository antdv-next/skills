# option-label-center

## Description (zh-CN)

将选项标签显示居中对齐。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const options = [
  { value: 'long', label: 'long, long, long piece of text' },
  { value: 'short', label: 'short' },
  { value: 'normal', label: 'normal' },
]

const value1 = shallowRef('long')
const value2 = shallowRef(undefined)
const value3 = shallowRef('normal')
const value4 = shallowRef(['normal'])
const value5 = shallowRef<string[]>([])
const value6 = shallowRef(['long'])
const value7 = shallowRef<string[]>([])
const value8 = shallowRef(undefined)
const value9 = shallowRef('Bamboo')
const value10 = shallowRef('Bamboo')

const inputValue = shallowRef(undefined)
const singleValue1 = shallowRef(undefined)
const singleValue2 = shallowRef('Bamboo')
const multiValue1 = shallowRef<string[]>([])
const multiValue2 = shallowRef<string[]>([])
const multiValue3 = shallowRef(['Bamboo'])
const multiValue4 = shallowRef(['Bamboo'])
</script>

<template>
  <a-space wrap>
    <a-select
      v-model:value="value1"
      style="width: 120px"
      allow-clear
      :options="options"
    />

    <a-select
      v-model:value="value2"
      placeholder="Select a option"
      style="width: 120px; height: 60px"
      allow-clear
      :options="options"
    />

    <a-select
      v-model:value="value3"
      placeholder="Select a option"
      style="width: 120px"
      allow-clear
      :options="options"
    />

    <a-select
      v-model:value="value4"
      mode="multiple"
      placeholder="Select a option"
      style="width: 120px"
      allow-clear
      :options="options"
    />

    <a-select
      v-model:value="value5"
      mode="multiple"
      placeholder="Select a option"
      style="width: 120px; height: 60px"
      allow-clear
      :options="options"
    />

    <!-- Cascader placeholder -->
    <!-- <a-cascader
      placeholder="Select a option"
      style="width: 120px; height: 60px"
      allow-clear
      :options="options"
    /> -->

    <!-- TreeSelect placeholder -->
    <!-- <a-tree-select
      show-search
      style="width: 120px; height: 60px"
      placeholder="Please select"
      allow-clear
      :popup-match-select-width="false"
      tree-default-expand-all
      :tree-data="[
        {
          value: 'parent 1',
          title: 'parent 1',
          children: options,
        },
      ]"
    /> -->

    <a-select
      v-model:value="value6"
      prefix="Hello World"
      mode="multiple"
      allow-clear
      placeholder="Select"
      style="min-width: 200px; height: 200px"
      :options="options"
    />

    <a-select
      v-model:value="value7"
      mode="multiple"
      style="width: 200px"
      placeholder="请选择"
      max-tag-count="responsive"
      prefix="城市"
      :options="options"
    />

    <a-select
      v-model:value="value8"
      style="width: 200px"
      placeholder="请选择"
      prefix="城市"
      :options="options"
      show-search
      allow-clear
      status="error"
    />

    <a-select
      v-model:value="value9"
      style="width: 100px"
      prefix="Hi"
      :options="options"
      show-search
      allow-clear
      status="warning"
      variant="filled"
    />

    <a-select
      v-model:value="value10"
      style="width: 100px"
      prefix="Hi"
      :options="options"
      show-search
      allow-clear
      status="error"
      variant="borderless"
    />

    <!-- Form examples would require Form component implementation -->
  </a-space>

  <!-- Test for align -->
  <a-flex vertical style="width: 200px">
    <!-- Single -->
    <a-input v-model:value="inputValue" prefix="Hi" placeholder="Input" allow-clear />
    <a-select
      v-model:value="singleValue1"
      prefix="Hi"
      placeholder="Single"
      :options="options"
      allow-clear
      show-search
    />
    <a-select
      v-model:value="singleValue2"
      prefix="Hi"
      placeholder="Single"
      :options="options"
      allow-clear
      show-search
    />
    <!-- Multiple -->
    <a-select
      v-model:value="multiValue1"
      placeholder="Multiple"
      :options="options"
      allow-clear
      mode="multiple"
    />
    <a-select
      v-model:value="multiValue2"
      prefix="Hi"
      placeholder="Multiple"
      :options="options"
      allow-clear
      mode="multiple"
    />
    <a-select
      v-model:value="multiValue3"
      prefix="Hi"
      placeholder="Multiple"
      :options="options"
      allow-clear
      mode="multiple"
    />
    <a-select
      v-model:value="multiValue4"
      placeholder="Multiple"
      :options="options"
      allow-clear
      mode="multiple"
    />
  </a-flex>
</template>
```
