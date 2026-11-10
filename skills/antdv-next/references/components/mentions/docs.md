---
title: Mentions
description: Used to mention someone or something in an input.
---

## When To Use 
When you need to mention someone or something.

## Demos

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Size | demo/size.md |
| Variants | demo/variant.md |
| Asynchronous loading | demo/async.md |
| With Form | demo/form.md |
| Customize Trigger Token | demo/prefix.md |
| disabled or readOnly | demo/readonly.md |
| Placement | demo/placement.md |
| Customize Popup | demo/popup-render.md |
| With clear icon | demo/allow-clear.md |
| autoSize | demo/auto-size.md |
| Status | demo/status.md |
| Custom semantic dom styling | demo/style-class.md |
| autoSize debug | demo/autosize-textarea-debug.md |

## API

Common props ref：[Common props](../../docs/vue/common-props.md)

### Props

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| loading | Indicate loading state | boolean | false | - | × |
| status | Set validation status | InputStatus | - | - | × |
| options | Option Configuration | MentionsOptionProps[] | \[] | - | × |
| filterOption | Customize filter option logic | false \| (input: string, option: OptionProps) =&gt; boolean | - | - | × |
| validateSearch | Custom validation for search text. Return false to hide suggestions. | (text: string, split?: string) =&gt; boolean | - | - | × |
| popupClassName | The className of dropdown menu | string | - | - | × |
| popupRender | Customize the dropdown menu rendering | (menu: VueNode) =&gt; VueNode | - | - | × |
| variant | Variants of Input | Variant | `outlined` | - | ✓ |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | MentionsClassNamesType | - | - | ✓ |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | MentionsStylesType | - | - | ✓ |
| size | The size of the input box | `large` \| `medium` \| `small` | - | - | × |
| labelRender | Customize the rendering of option content | (ctx: &#123; option: MentionsOptionProps, index: number &#125;) =&gt; any | - | - | × |
| allowClear | Whether to show a clear button | boolean \| [AllowClearConfig](#allowclearconfig) | false | - | ✓ |
| disabled | Whether disabled | boolean | - | - | × |

### Events

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| focus | Trigger when mentions get focus | (event: FocusEvent) =&gt; void | - |
| blur | Trigger when mentions lose focus | (event: FocusEvent) =&gt; void | - |
| change | Trigger when value changed | (value: string) =&gt; void | - |
| select | Trigger when user select the option | (option: MentionsOptionProps, prefix: string) =&gt; void | - |
| popupScroll | Trigger when mentions scroll | (event: Event) =&gt; void | - |
| search | Trigger when prefix hit | (text: string, prefix: string) =&gt; void | - |

### AllowClearConfig 
Fields that support global configuration use component values first, then global values, then defaults. `allowClear: true` inherits the global configuration; `disabled: false` and `tabIndex: 0` override global values.

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | Custom clear icon | VueNode | - | - | ✓ |
| disabled | Disable the clear button | boolean | false | - | ✓ |
| tabIndex | Tab order of the clear button. `-1` excludes it from Tab navigation | number | 0 | 1.7.0 | ✓ |

### Option 
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Value inserted when selected | string | - |
| key | The key value of the option | string | - |
| disabled | Whether the option is disabled | boolean | - |
| class | Class name of the option | string | - |
| style | The style of the option | CSSProperties | - |

### Slots

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffix | Customize the suffix content | () =&gt; any | - |
| popupRender | Customize the dropdown menu rendering | (menu: VueNode) =&gt; VueNode | - |
| labelRender | Customize the rendering of option content | (ctx: &#123; option: MentionsOptionProps, index: number &#125;) =&gt; any | - |

## Semantic DOM 
| _semantic | demo/_semantic.md |
