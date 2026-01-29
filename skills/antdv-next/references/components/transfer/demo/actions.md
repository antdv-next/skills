# 自定义操作

## Description (zh-CN)

使用 `actions` 属性可以自定义操作按钮。

当 `actions` 传入字符串数组时，会使用默认的 Button 组件，并将字符串作为按钮文本。

当 `actions` 传入 VueNode 数组时，会直接使用这些元素作为操作按钮，这样你可以使用自定义的按钮组件，如本例中的带有加载状态的按钮。

注意：

1. 当使用自定义按钮时，Transfer 组件会自动处理按钮的禁用状态和点击事件。
2. 你可以在自定义按钮上添加 `disabled` 属性来控制按钮的禁用状态。
3. 你可以在自定义按钮上添加 `onClick` 事件处理函数，它会与 Transfer 组件的内部处理函数合并执行。

## Source

```vue
<script setup lang="ts">
import type { TransferEmits } from 'antdv-next'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@antdv-next/icons'
import { Button, message } from 'antdv-next'
import { computed, h, ref } from 'vue'

interface RecordType {
  key: string
  title: string
  description: string
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `Content ${i + 1}`,
  description: `Description ${i + 1}`,
}))

const initialTargetKeys = mockData.filter(item => Number(item.key) > 10).map(item => item.key)

const targetKeys = ref<string[]>(initialTargetKeys)
const selectedKeys = ref<string[]>([])
const loadingRight = ref(false)
const loadingLeft = ref(false)

const handleChange: TransferEmits['change'] = (newTargetKeys, direction, moveKeys) => {
  targetKeys.value = newTargetKeys as string[]

  if (direction === 'right') {
    loadingRight.value = true
    setTimeout(() => {
      loadingRight.value = false
      message.success(`Successfully added ${moveKeys.length} items to the right`)
    }, 1000)
  }
  else {
    loadingLeft.value = true
    setTimeout(() => {
      loadingLeft.value = false
      message.success(`Successfully added ${moveKeys.length} items to the left`)
    }, 1000)
  }
}

const handleSelectChange: TransferEmits['selectChange'] = (sourceSelectedKeys, targetSelectedKeys) => {
  selectedKeys.value = [...sourceSelectedKeys, ...targetSelectedKeys] as string[]
}

const rightButtonDisabled = computed(() =>
  selectedKeys.value.length === 0 || selectedKeys.value.every(key => targetKeys.value.includes(key)),
)

const leftButtonDisabled = computed(() =>
  selectedKeys.value.length === 0 || selectedKeys.value.every(key => !targetKeys.value.includes(key)),
)

function handleRightButtonClick(event: MouseEvent) {
  console.log('Right button clicked', event)
}

function handleLeftButtonClick(event: MouseEvent) {
  console.log('Left button clicked', event)
}

const actions = computed(() => [
  h(
    Button,
    {
      type: 'primary',
      icon: h(DoubleRightOutlined),
      loading: loadingRight.value,
      disabled: rightButtonDisabled.value,
      onClick: handleRightButtonClick,
    },
    { default: () => 'Move To Right' },
  ),
  h(
    Button,
    {
      type: 'primary',
      icon: h(DoubleLeftOutlined),
      loading: loadingLeft.value,
      disabled: leftButtonDisabled.value,
      onClick: handleLeftButtonClick,
    },
    { default: () => 'Move To Left' },
  ),
])
</script>

<template>
  <a-transfer
    v-model:target-keys="targetKeys"
    v-model:selected-keys="selectedKeys"
    :data-source="mockData"
    :actions="actions"
    :render="(item: RecordType) => item.title"
    @change="handleChange"
    @select-change="handleSelectChange"
  />
</template>
```
