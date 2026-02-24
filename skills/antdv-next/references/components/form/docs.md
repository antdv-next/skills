---
title: Form
description: High-performance form component with data domain management. Includes data entry, validation, and corresponding styles.
---

## When To Use 
- When you need to create an instance or collect information.
- When you need to validate fields in certain rules.

## Demos

| Demo | Path |
| --- | --- |
| Basic Usage | demo/basic.md |
| Form methods | demo/control-hooks.md |
| Form Layout | demo/layout.md |
| Form mix layout | demo/layout-multiple.md |
| Form disabled | demo/disabled.md |
| Form variants | demo/variant.md |
| Required style | demo/required-mark.md |
| Form size | demo/size.md |
| label can wrap | demo/layout-can-wrap.md |
| No block rule | demo/warning-only.md |
| Watch Hooks | demo/useWatch.md |
| Validate Trigger | demo/validate-trigger.md |
| Validate Only | demo/validate-only.md |
| Path Prefix | demo/form-item-path.md |
| Dynamic Form Item | demo/dynamic-form-item.md |
| Dynamic Form nest Items | demo/dynamic-form-items.md |
| Complex Dynamic Form Item | demo/dynamic-form-items-complex.md |
| Nest | demo/nest-messages.md |
| complex form control | demo/complex-form-control.md |
| Customized Form Controls | demo/customized-form-controls.md |
| Store Form Data into Upper Component | demo/global-state.md |
| Control between forms | demo/form-context.md |
| Inline Login Form | demo/inline-login.md |
| Login Form | demo/login.md |
| Registration | demo/register.md |
| Advanced search | demo/advanced-search.md |
| Form in Modal to Create | demo/form-in-modal.md |
| Time-related Controls | demo/time-related-controls.md |
| Handle Form Data Manually | demo/without-form-create.md |
| Customized Validation | demo/validate-static.md |
| Dynamic Rules | demo/dynamic-rule.md |
| Dependencies | demo/form-dependencies.md |
| getValueProps + normalize | demo/getValueProps-normalize.md |
| Slide to error field | demo/validate-scroll-to-field.md |
| Other Form Controls | demo/validate-other.md |
| Custom semantic dom styling | demo/style-class.md |

## API

Common props ref：[Common props](../../docs/vue/common-props.md)

### Form

### Props 
| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | FormClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | FormStylesType | - | - |
| colon | Configure the default value of `colon` for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) | boolean | true | - |
| name | Form name. Will be the prefix of Field `id` | string | - | - |
| layout | Form layout | FormLayout | `horizontal` | - |
| labelAlign | The text align of label of all items | FormLabelAlign | `right` | - |
| labelWrap | whether label can be wrap | boolean | false | - |
| labelCol | Label layout, like `Col` component. Set `span` `offset` value like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` | ColProps | - | - |
| wrapperCol | The layout for input controls, same as `labelCol` | ColProps | - | - |
| feedbackIcons | Can be passed custom icons while `Form.Item` element has `hasFeedback` | FeedbackIcons | - | - |
| size | Set field component size (antd components only) | SizeType | - | - |
| disabled | Set form component disable, only available for antd components | boolean | false | - |
| scrollToFirstError | Auto scroll to first failed field when submit | ScrollFocusOptions \| boolean | false | - |
| requiredMark | Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config | RequiredMark | true | - |
| variant | Variant of components inside form | Variant | `outlined` | - |
| validateMessages | Validation prompt template, description [see below](#validatemessages) | ValidateMessages | - | - |
| model | Form model | Record&lt;string, any&gt; | - | - |
| rules | Form rules | Record&lt;string, Rule[]&gt; | - | - |
| validateTrigger | Config field validate trigger | string \| string[] \| false | `change` | - |
| preserve | Keep field value even when field removed. You can get the preserve field value by `getFieldsValue(true)` | boolean | true | - |
| clearOnDestroy | Clear form values when the form is uninstalled | boolean | false | - |
| validateOnRuleChange | - | boolean | - | - |
| rootClass | Root container class | string | - | - |
| prefixCls | Prefix class name | string | - | - |

### Events 
| Event | Description | Type | Version |
| --- | --- | --- | --- |
| finish | Trigger after submitting the form and verifying data successfully | (values: Record&lt;string, any&gt;) =&gt; void | - |
| finishFailed | Trigger after submitting the form and verifying data failed | (errorInfo: ValidateErrorEntity) =&gt; void | - |
| submit | - | (e: Event) =&gt; void | - |
| reset | - | (e: Event) =&gt; void | - |
| validate | - | (name: InternalNamePath, status: boolean, errors: any[] \| null) =&gt; void | - |
| valuesChange | Trigger when value updated | (changedValues: Record&lt;string, any&gt;, values: Record&lt;string, any&gt;) =&gt; void | - |
| fieldsChange | Trigger when field updated | (changedFields: FieldData[], allFields: FieldData[]) =&gt; void | - |

### Methods 
```ts
import { FormInstance } from 'antdv-next'

const formRef = ref<FormInstance>()
```

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| getFieldValue | - | (name: NamePath) =&gt; StoreValue | - |
| getFieldsValue | - | (nameList?: NamePath[] \| true) =&gt; Record&lt;string, any&gt; | - |
| getFieldError | - | (name: NamePath) =&gt; string[] | - |
| getFieldsError | - | (nameList?: NamePath[]) =&gt; FieldError[] | - |
| getFieldWarning | - | (name: NamePath) =&gt; string[] | - |
| isFieldsTouched | - | (nameList?: NamePath[] \| boolean, allFieldsTouched?: boolean) =&gt; boolean | - |
| isFieldTouched | - | (name: NamePath) =&gt; boolean | - |
| isFieldsValidating | - | (nameList?: NamePath[]) =&gt; boolean | - |
| isFieldValidating | - | (name: NamePath) =&gt; boolean | - |
| resetFields | - | (nameList?: NamePath[]) =&gt; void | - |
| clearValidate | - | (nameList?: NamePath[]) =&gt; void | - |
| setFields | - | (data: FieldData[]) =&gt; void | - |
| setFieldValue | - | (name: NamePath, value: any) =&gt; void | - |
| setFieldsValue | - | (values: Record&lt;string, any&gt;) =&gt; void | - |
| validateFields | - | (nameList?: NamePath[], options?: ValidateOptions) =&gt; Promise&lt;Record&lt;string, any&gt;&gt; | - |
| validate | - | () =&gt; Promise&lt;Record&lt;string, any&gt;&gt; | - |
| submit | - | () =&gt; void | - |
| nativeElement | - | HTMLFormElement \| undefined | - |

### FormItem 
#### Props 
| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Field name | NamePath | - | - |
| label | Label text | VueNode | - | - |
| labelAlign | The text align of label | FormLabelAlign | `right` | - |
| labelCol | The layout of label. If both Form and Form.Item exists, use Item first | ColProps | - | - |
| wrapperCol | The layout for input controls, same as `labelCol` | ColProps | - | - |
| colon | Used with `label`, whether to display `:` after label text | boolean | true | - |
| extra | The extra prompt message | VueNode | - | - |
| help | The prompt message. If not provided, the prompt message will be generated by the validation rule | VueNode | - | - |
| hasFeedback | Display validation status icon | boolean \| \{ icons: FeedbackIcons \} | false | - |
| validateStatus | The validation status | ValidateStatus | - | - |
| required | Display required style. It will be generated by the validation rule | boolean | false | - |
| rules | Rules for field validation | Rule[] | - | - |
| validateTrigger | When to validate the value of children node | string \| string[] \| false | `change` | - |
| validateDebounce | Delay milliseconds to start validation | number | - | - |
| validateFirst | Whether stop validate on first rule of error for this field. Will parallel validate when `parallel` configured | boolean \| `parallel` | false | - |
| noStyle | No style for `true`, used as a pure field control | boolean | false | - |
| id | Set sub label `htmlFor` | string | - | - |
| hidden | Whether to hide Form.Item (still collect and validate value) | boolean | false | - |
| messageVariables | The default validate field info | Record&lt;string, string&gt; | - | - |
| tooltip | Config tooltip info | VueNode \| TooltipProps & \{ icon: VueNode \} | - | - |
| layout | Form item layout | `horizontal` \| `vertical` | - | - |
| rootClass | Root container class | string | - | - |
| prefixCls | Prefix class name | string | - | - |

## Types

### validateMessages

Form provides default validation error messages. You can modify the template by configuring `validateMessages` property:

```ts
const validateMessages = {
  required: '\'${name}\' is required!',
}
```

```vue
<template>
  <a-form :validate-messages="validateMessages">
    ...
  </a-form>
</template>
```

ConfigProvider also provides a global configuration scheme that allows for uniform configuration error notification templates.

```vue
<template>
  <a-config-provider :form="{ validateMessages }">
    <a-form />
  </a-config-provider>
</template>
```

> Note: Vue version does not provide `Form.List`. You can use `v-for` with reactive arrays to build dynamic form items.

## Semantic DOM 
| _semantic | demo/_semantic.md |
