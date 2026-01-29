# 弹出方向

## Description (zh-CN)

自定义弹出位置，提供了四个预设值：`top`、`right`、`bottom`、`left`，默认值为 `top`。

## Source

```vue
<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { CommentOutlined, DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@antdv-next/icons'

const BOX_SIZE = 100
const BUTTON_SIZE = 40

const wrapperStyle: CSSProperties = {
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
}

const boxStyle: CSSProperties = {
  width: `${BOX_SIZE}px`,
  height: `${BOX_SIZE}px`,
  position: 'relative',
}

const insetInlineEnd = [
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -(BUTTON_SIZE / 2),
  (BOX_SIZE - BUTTON_SIZE) / 2,
  BOX_SIZE - BUTTON_SIZE / 2,
]

const bottom = [
  BOX_SIZE - BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
]

const placements = ['top', 'right', 'bottom', 'left'] as const
const icons = [UpOutlined, RightOutlined, DownOutlined, LeftOutlined]
</script>

<template>
  <a-flex justify="space-evenly" align="center" :style="wrapperStyle">
    <div :style="boxStyle">
      <a-float-button-group
        v-for="(placement, i) in placements"
        :key="placement"
        trigger="click"
        :placement="placement"
        :style="{
          position: 'absolute',
          insetInlineEnd: `${insetInlineEnd[i]}px`,
          bottom: `${bottom[i]}px`,
        }"
      >
        <template #icon>
          <component :is="icons[i]" />
        </template>
        <a-float-button />
        <a-float-button>
          <template #icon>
            <CommentOutlined />
          </template>
        </a-float-button>
      </a-float-button-group>
    </div>
  </a-flex>
</template>
```
