# render-panel

## Source

```vue
<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'

import { Dropdown } from 'antdv-next'
import { h } from 'vue'

const InternalDropdown = (Dropdown as any)._InternalPanelDoNotUseOrYouWillBeFired

const menu = [
  {
    key: '1',
    label: h(
      'a',
      {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://www.antgroup.com',
      },
      '1st menu item',
    ),
  },
  {
    key: '2',
    label: h(
      'a',
      {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://www.aliyun.com',
      },
      '2nd menu item (disabled)',
    ),
    icon: () => h(SmileOutlined),
    disabled: true,
  },
  {
    key: '3',
    label: h(
      'a',
      {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://www.luohanacademy.com',
      },
      '3rd menu item (disabled)',
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
]
</script>

<template>
  <InternalDropdown
    :menu="{ items: menu }"
  />
</template>
```
