# MyLink 文字链接

文字链接组件，用于页面跳转或触发操作。支持多种类型、下划线控制、禁用状态和图标等功能。

## 基本用法

通过 `type` 属性设置链接类型，支持 `primary`、`success`、`info`、`warning`、`danger` 五种类型，默认为 `primary`。

```tsx preview
import { MyLink } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyLink type="primary">主要链接</MyLink>
      <MyLink type="success">成功链接</MyLink>
      <MyLink type="info">信息链接</MyLink>
      <MyLink type="warning">警告链接</MyLink>
      <MyLink type="danger">危险链接</MyLink>
    </div>
  );
}
```

## 下划线控制

通过 `underline` 属性控制下划线的显示时机，支持 `always`（始终显示）、`hover`（悬停时显示）、`never`（从不显示）三种模式，默认为 `hover`。

```tsx preview
import { MyLink } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyLink type="primary" underline="always">始终显示下划线</MyLink>
      <MyLink type="primary" underline="hover">悬停时显示下划线</MyLink>
      <MyLink type="primary" underline="never">不显示下划线</MyLink>
    </div>
  );
}
```

## 禁用状态

通过 `disabled` 属性禁用链接，禁用后链接不可点击且样式变灰。

```tsx preview
import { MyLink } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyLink type="primary" disabled>主要链接</MyLink>
      <MyLink type="success" disabled>成功链接</MyLink>
      <MyLink type="info" disabled>信息链接</MyLink>
      <MyLink type="warning" disabled>警告链接</MyLink>
      <MyLink type="danger" disabled>危险链接</MyLink>
    </div>
  );
}
```

## 带图标的链接

通过 `icon` 属性为链接设置图标。

```tsx preview
import { MyLink } from '@my-element/components';

export default function Demo4() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyLink type="primary" icon="Edit">编辑</MyLink>
      <MyLink type="success" icon="Check">查看</MyLink>
      <MyLink type="info" icon="Message">消息</MyLink>
      <MyLink type="warning" icon="Star">收藏</MyLink>
      <MyLink type="danger" icon="Delete">删除</MyLink>
    </div>
  );
}
```

## 链接跳转

通过 `href` 属性设置链接地址，通过 `target` 属性设置跳转方式。当 `target` 为 `_blank` 时，会自动添加 `rel="noopener noreferrer"` 安全属性。

```tsx preview
import { MyLink } from '@my-element/components';

export default function Demo5() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <MyLink type="primary" href="https://www.baidu.com" target="_self">当前页打开</MyLink>
      <MyLink type="primary" href="https://www.baidu.com" target="_blank">新页面打开</MyLink>
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` | 链接类型 |
| underline | `'always' \| 'hover' \| 'never'` | `'hover'` | 下划线显示时机 |
| disabled | `boolean` | `false` | 是否禁用链接 |
| href | `string` | - | 链接地址 |
| target | `'_blank' \| '_parent' \| '_self' \| '_top'` | `'_self'` | 链接跳转方式 |
| icon | `string` | - | 链接图标名称 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| children | 链接内容，可以是文本或其他 React 元素 |
