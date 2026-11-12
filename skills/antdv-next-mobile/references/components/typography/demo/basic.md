# Basic

A document sample: `Typography` as the container, composed of titles, paragraphs and text inside.

## Source

```vue
<template>
  <am-typography>
    <am-typography-title :level="3">
      Introduction
    </am-typography-title>
    <am-typography-paragraph>
      Enterprise products at Ant form a large and complex system. They are huge in scale and rich in features, and they change frequently, so design and development have to respond quickly.
    </am-typography-paragraph>
    <am-typography-paragraph>
      With the trend of commercialization, more and more enterprise products demand a better user experience. We hope to
      <am-typography-text strong>
        distill a unified design language
      </am-typography-text>
      that helps designers and developers
      <am-typography-text mark>
        quickly build
      </am-typography-text>
      mobile interfaces.
    </am-typography-paragraph>
    <am-typography-title :level="4">
      Design Resources
    </am-typography-title>
    <am-typography-paragraph type="secondary">
      Press <am-typography-text keyboard>
        Esc
      </am-typography-text> to exit reading, and install with <am-typography-text code>
        pnpm add @antdv-next/mobile
      </am-typography-text>.
    </am-typography-paragraph>
  </am-typography>
</template>
```
