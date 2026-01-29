# component-token

## Source

```vue
<script setup lang="ts">
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@antdv-next/icons'

const tabList = [
  {
    key: 'tab1',
    label: 'tab1',
  },
  {
    key: 'tab2',
    label: 'tab2',
  },
]
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Card: {
          headerBg: '#e6f4ff',
          bodyPaddingSM: 22,
          headerPaddingSM: 20,
          headerPadding: 18,
          bodyPadding: 26,
          headerFontSize: 20,
          headerFontSizeSM: 20,
          headerHeight: 60,
          headerHeightSM: 60,
          actionsBg: '#e6f4ff',
          actionsLiMargin: `2px 0`,
          tabsMarginBottom: 0,
          extraColor: 'rgba(0,0,0,0.25)',
        },
      },
    }"
  >
    <a-card title="Card title" extra="More" :tab-list="tabList">
      <template #actions>
        <SettingOutlined key="setting" />
        <EditOutlined key="edit" />
        <EllipsisOutlined key="ellipsis" />
      </template>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
    <a-card size="small" title="Small size card" style="width: 300px">
      <template #extra>
        <a href="#">More</a>
      </template>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </a-config-provider>
</template>
```
