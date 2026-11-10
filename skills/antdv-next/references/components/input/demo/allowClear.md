# With clear icon

## Description (en-US)

Input box with the remove icon, click the icon to delete everything.

Both Input and TextArea support clear button configuration through `allowClear`. A clear button with `tabIndex: -1` is excluded from Tab navigation.

## Source

```vue
<template>
  <a-input allow-clear placeholder="input with clear icon" />
  <br>
  <br>
  <a-input :allow-clear="{ tabIndex: -1 }" placeholder="clear icon is skipped by Tab" />
  <br>
  <br>
  <a-textarea allow-clear placeholder="textarea with clear icon" />
</template>
```
