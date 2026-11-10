# Checkbox Group

## Description (en-US)

Generate a group of checkboxes from an array.

## Source

```vue
<script setup lang="ts">
const plainOptions = ['Apple', 'Pear', 'Orange']

const options: any[] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3' },
]

const optionsWithDisabled: any[] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: false },
]

function onChange(checkedValues: any[]) {
  console.log('checked = ', checkedValues)
}
</script>

<template>
  <a-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
  <br>
  <br>
  <a-checkbox-group :options="options" :default-value="['Pear']" @change="onChange" />
  <br>
  <br>
  <a-checkbox-group disabled :options="optionsWithDisabled" :default-value="['Apple']" @change="onChange" />
</template>
```
