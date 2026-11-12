---
title: PC Parity
---

If you are familiar with antdv-next, treat this page as a cheat sheet.

## Common conventions

| Convention | PC (antdv-next) | Mobile (@antdv-next/mobile) |
| --- | --- | --- |
| Component tag | `<a-button>` | `<am-button>` |
| Class name prefix | `ant-btn` | `am-button` |
| CSS variable prefix | `--ant-` | `--am-` |
| Visibility | `v-model:open` | `v-model:open` |
| Value | `v-model:value` / `v-model:checked` | Same |
| Size | `size="small \| middle \| large"` | Same |
| Root class name | `rootClass` | Same |
| Semantic structure | `classes` / `styles` | Same |
| Render props | A prop and a same-named slot; the slot wins | Same |
| Events | `emits`, no `on*` props | Same |
| Validation status | `status="error \| warning"` | Same |
| Global config | `ConfigProvider` (`theme`, `locale`, `componentSize`, `componentDisabled`) | Same |
| Theme | CSS-in-JS + optional CSS variables | CSS variables only |
| Static methods | `message` / `Modal.confirm` | Same, plus `Toast` and `ActionSheet.show` |

## Component mapping

| PC component | Mobile | Description |
| --- | --- | --- |
| Button, Divider, Flex, Row / Col, Space | Same name | Same API |
| Typography | Typography | Focuses on multi-line ellipsis and expanding |
| Tabs, Steps, Segmented, Pagination | Same name | Same `items` usage; Tabs supports swipe switching |
| Menu / Layout.Sider | TabBar, SideBar, NavBar | Mobile navigation patterns |
| Dropdown | Dropdown | On mobile it is a filter bar dropdown panel rather than a context menu |
| Form, Input, InputNumber, Checkbox, Radio, Switch, Rate, Slider | Same name | Form is rendered as cells; InputNumber looks like a stepper by default |
| Select | Select, Selector | Select pops up a list from the bottom; Selector is a flat tile selection |
| Cascader | Cascader | Level-by-level selection in a bottom popup |
| DatePicker, TimePicker | Same name | Wheel picker, same value types (dayjs / `valueFormat`) |
| DatePicker.RangePicker | DatePicker.RangePicker, Calendar | Start / end tabs with wheels in a bottom popup; Calendar offers range selection on a calendar |
| Upload | Upload | Image upload in a grid by default |
| Avatar, Badge, Card, Collapse, Descriptions, Empty, Image, Tag, Timeline, Statistic | Same name | Same API |
| List | List / ListItem | The most common cell list on mobile |
| Carousel | Carousel | Supports gestures and infinite loop |
| Alert, Progress, Result, Skeleton, Spin, Watermark | Same name | Same API |
| Drawer | Drawer, Popup | Popup is the lower-level popup layer |
| Modal | Modal | iOS-style dialog, same static methods |
| message | message, Toast | Toast is a centered light-weight prompt |
| notification | notification | Full-width card at the top / bottom, swipe to dismiss |
| App | App | `App.useApp()` additionally returns `toast` |
| Popover | Popover | Triggered by tap, supports a menu mode |
| FloatButton | FloatButton | Additionally supports dragging and edge snapping |
| Affix | Affix | Same API |
| QRCode | QRCode | Built-in encoder, additionally exposes `toDataURL()` |
| Tour | Tour | The panel adapts to narrow screens and prefers top / bottom placements |
| Tree | Tree | The whole row is tappable; no drag and drop or keyboard navigation |
| ColorPicker | ColorPicker, ColorPickerPanel | Picked in a bottom popup; gradients are not supported yet |
| Masonry | Masonry | `columns` accepts a number only, 2 by default |
| BorderBeam | BorderBeam | The beam hugs the inside of the border when the host clips its overflow |
| Listy | Listy | Built on VirtualList, `virtual` is on by default |
| Table, Transfer, Mentions, Splitter, etc. | - | Not suitable for small screens, not provided yet |

## Mobile-only components

NavBar, TabBar, SideBar, IndexBar, Popup, Mask, ActionSheet, Toast, NoticeBar, Picker, PickerView, Calendar, Selector, NumberKeyboard, PullToRefresh, InfiniteScroll, SwipeAction, FloatingPanel, ImagePreview, SafeArea, Grid / GridItem, ActionBar, ShareSheet, Signature, Highlight, RollingText, Barrage.

## Migration example

PC:

```vue
<a-form :model="form" @finish="onFinish">
  <a-form-item label="Name" name="name" :rules="[{ required: true }]">
    <a-input v-model:value="form.name" />
  </a-form-item>
  <a-form-item label="Birthday" name="birthday">
    <a-date-picker v-model:value="form.birthday" />
  </a-form-item>
  <a-button type="primary" html-type="submit">Submit</a-button>
</a-form>
```

On mobile, just change the prefix to `am-`:

```vue
<am-form :model="form" @finish="onFinish">
  <am-form-item label="Name" name="name" :rules="[{ required: true }]">
    <am-input v-model:value="form.name" />
  </am-form-item>
  <am-form-item label="Birthday" name="birthday">
    <am-date-picker v-model:value="form.birthday" />
  </am-form-item>
  <am-button type="primary" html-type="submit" block>Submit</am-button>
</am-form>
```

Every component document ends with a "Differences from PC" section that lists the props that are unsupported or behave differently.
