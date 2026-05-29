# MyTag 标签

标签组件，用于标记和分类。支持多种类型、主题、尺寸，以及可关闭、描边、圆角等功能。

## 基本用法

通过 `type` 属性设置标签类型，支持 `primary`、`success`、`info`、`warning`、`danger` 五种类型，默认为 `primary`。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag type="primary">标签一</MyTag>
      <MyTag type="success">标签二</MyTag>
      <MyTag type="info">标签三</MyTag>
      <MyTag type="warning">标签四</MyTag>
      <MyTag type="danger">标签五</MyTag>
    </div>
  );
}
```

## 不同主题

通过 `effect` 属性设置标签主题，支持 `light`、`dark`、`plain` 三种主题，默认为 `light`。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag effect="dark" type="primary">标签一</MyTag>
      <MyTag effect="dark" type="success">标签二</MyTag>
      <MyTag effect="dark" type="info">标签三</MyTag>
      <MyTag effect="dark" type="warning">标签四</MyTag>
      <MyTag effect="dark" type="danger">标签五</MyTag>
      <div style={{ width: '100%' }}></div>
      <MyTag effect="light" type="primary">标签一</MyTag>
      <MyTag effect="light" type="success">标签二</MyTag>
      <MyTag effect="light" type="info">标签三</MyTag>
      <MyTag effect="light" type="warning">标签四</MyTag>
      <MyTag effect="light" type="danger">标签五</MyTag>
      <div style={{ width: '100%' }}></div>
      <MyTag effect="plain" type="primary">标签一</MyTag>
      <MyTag effect="plain" type="success">标签二</MyTag>
      <MyTag effect="plain" type="info">标签三</MyTag>
      <MyTag effect="plain" type="warning">标签四</MyTag>
      <MyTag effect="plain" type="danger">标签五</MyTag>
    </div>
  );
}
```

## 可关闭标签

设置 `closable` 属性为 `true`，标签右侧会显示关闭图标，点击即可关闭标签。关闭时会触发 `onClose` 回调。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag type="primary" closable>标签一</MyTag>
      <MyTag type="success" closable>标签二</MyTag>
      <MyTag type="info" closable>标签三</MyTag>
      <MyTag type="warning" closable>标签四</MyTag>
      <MyTag type="danger" closable>标签五</MyTag>
    </div>
  );
}
```

## 圆角标签

设置 `round` 属性为 `true`，标签会显示为圆角样式。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo4() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag type="primary" round>标签一</MyTag>
      <MyTag type="success" round>标签二</MyTag>
      <MyTag type="info" round>标签三</MyTag>
      <MyTag type="warning" round>标签四</MyTag>
      <MyTag type="danger" round>标签五</MyTag>
    </div>
  );
}
```

## 描边标签

设置 `hit` 属性为 `true`，标签会显示与文字颜色相同的边框描边。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo5() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag type="primary" hit>标签一</MyTag>
      <MyTag type="success" hit>标签二</MyTag>
      <MyTag type="info" hit>标签三</MyTag>
      <MyTag type="warning" hit>标签四</MyTag>
      <MyTag type="danger" hit>标签五</MyTag>
    </div>
  );
}
```

## 不同尺寸

通过 `size` 属性设置标签大小，支持 `large`、`small` 两种尺寸，不设置则为默认大小。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo6() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyTag type="primary" size="large">大标签</MyTag>
      <MyTag type="primary">默认标签</MyTag>
      <MyTag type="primary" size="small">小标签</MyTag>
    </div>
  );
}
```

## 禁用动画

设置 `disableTransitions` 属性为 `true`，标签将禁用过渡动画。

```tsx preview
import { MyTag } from '@my-element/components';

export default function Demo7() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyTag type="primary" disableTransitions>禁用动画</MyTag>
      <MyTag type="success">默认动画</MyTag>
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | 标签类型 |
| size | `'large' \| 'small'` | - | 标签大小 |
| effect | `'dark' \| 'light' \| 'plain'` | `'light'` | 标签主题 |
| closable | `boolean` | `false` | 是否可关闭 |
| round | `boolean` | `false` | 是否为圆角标签 |
| hit | `boolean` | `false` | 是否有描边 |
| color | `string` | - | 自定义背景颜色 |
| disableTransitions | `boolean` | `false` | 是否禁用过渡动画 |

### 事件

| 事件名 | 类型 | 说明 |
| --- | --- | --- |
| onClose | `() => void` | 关闭标签时触发 |
| onClick | `() => void` | 点击标签时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| children | 标签内容，可以是文本或其他 React 元素 |
