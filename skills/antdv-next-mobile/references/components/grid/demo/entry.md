# Grid entries

The most common usage on mobile: build the entries of a home page with `Grid`. Pass the entries through `items`, set the number of columns with `columns` (4 by default) and listen to `itemClick`.

## Source

```vue
<script setup lang="ts">
import type { GridItemType } from '@antdv-next/mobile'
import {
  AppstoreOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  ShoppingOutlined,
  StarOutlined,
  WalletOutlined,
} from '@antdv-next/icons'
import { Toast } from '@antdv-next/mobile'
import { h } from 'vue'

const items: GridItemType[] = [
  { key: 'wallet', icon: h(WalletOutlined), title: 'Wallet' },
  { key: 'cards', icon: h(CreditCardOutlined), title: 'Cards' },
  { key: 'coupons', icon: h(GiftOutlined), title: 'Coupons', badge: 3 },
  { key: 'orders', icon: h(ShoppingOutlined), title: 'Orders', badge: true },
  { key: 'favorites', icon: h(StarOutlined), title: 'Favorites' },
  { key: 'address', icon: h(EnvironmentOutlined), title: 'Address' },
  { key: 'support', icon: h(CustomerServiceOutlined), title: 'Support', disabled: true },
  { key: 'more', icon: h(AppstoreOutlined), title: 'More' },
]

function handleClick(item: GridItemType) {
  Toast.show(`Tapped ${item.title}`)
}
</script>

<template>
  <am-grid :items="items" class="entries" @item-click="handleClick" />
</template>

<style scoped>
.entries {
  --am-grid-icon-color: var(--am-color-primary);
}
</style>
```
