# data.ts

## Source

```ts
import type { CascaderOption } from '@antdv-next/mobile'

export const regions: CascaderOption[] = [
  {
    label: 'Zhejiang',
    value: 'zhejiang',
    children: [
      {
        label: 'Hangzhou',
        value: 'hangzhou',
        children: [
          { label: 'Xihu', value: 'xihu' },
          { label: 'Yuhang', value: 'yuhang' },
          { label: 'Binjiang', value: 'binjiang' },
          { label: 'Xiaoshan', value: 'xiaoshan' },
        ],
      },
      {
        label: 'Ningbo',
        value: 'ningbo',
        children: [
          { label: 'Haishu', value: 'haishu' },
          { label: 'Yinzhou', value: 'yinzhou' },
        ],
      },
      { label: 'Zhoushan (unavailable)', value: 'zhoushan', disabled: true },
    ],
  },
  {
    label: 'Jiangsu',
    value: 'jiangsu',
    children: [
      {
        label: 'Nanjing',
        value: 'nanjing',
        children: [
          { label: 'Xuanwu', value: 'xuanwu' },
          { label: 'Gulou', value: 'gulou' },
          { label: 'Jianye', value: 'jianye' },
        ],
      },
      {
        label: 'Suzhou',
        value: 'suzhou',
        children: [
          { label: 'Gusu', value: 'gusu' },
          { label: 'Wuzhong', value: 'wuzhong' },
        ],
      },
    ],
  },
  {
    label: 'Shanghai',
    value: 'shanghai',
    children: [
      { label: 'Huangpu', value: 'huangpu' },
      { label: 'Xuhui', value: 'xuhui' },
      { label: 'Pudong', value: 'pudong' },
    ],
  },
]
```
