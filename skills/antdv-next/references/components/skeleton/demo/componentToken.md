# componentToken

## Source

```vue
<template>
  <a-config-provider
    :theme="{
      components: {
        Skeleton: {
          blockRadius: 30,
          titleHeight: 50,
          gradientFromColor: '#222',
          gradientToColor: '#444',
          paragraphMarginTop: 30,
          paragraphLiHeight: 30,
        },
      },
    }"
  >
    <a-skeleton loading active />
  </a-config-provider>
</template>
```
