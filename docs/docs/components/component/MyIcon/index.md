# MyIcon 图标

这是 MyIcon 组件的文档页面，展示了图标组件的各种用法和样式。

## 基本用法

使用 `icon` 属性指定图标名称，支持 Element Plus 图标库中的所有图标。

```tsx preview
import { MyIcon } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyIcon icon="Search" />
      <MyIcon icon="Edit" />
      <MyIcon icon="Delete" />
      <MyIcon icon="Share" />
      <MyIcon icon="Plus" />
      <MyIcon icon="Check" />
    </div>
  );
}
```

## 图标大小

使用 `size` 属性控制图标大小，默认为 16px。

```tsx preview
import { MyIcon } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyIcon icon="Search" size={12} />
      <MyIcon icon="Search" size={16} />
      <MyIcon icon="Search" size={24} />
      <MyIcon icon="Search" size={32} />
      <MyIcon icon="Search" size={48} />
    </div>
  );
}
```

## 图标颜色

使用 `color` 属性自定义图标颜色。

```tsx preview
import { MyIcon } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyIcon icon="Search" color="#606266" />
      <MyIcon icon="Search" color="#409EFF" />
      <MyIcon icon="Search" color="#67C23A" />
      <MyIcon icon="Search" color="#E6A23C" />
      <MyIcon icon="Search" color="#F56C6C" />
    </div>
  );
}
```

## 常用图标展示

展示一些常用的图标示例。

```tsx preview
import { MyIcon } from '@my-element/components';

export default function Demo4() {
  const icons = [
    'User', 'Setting', 'Message', 'Star',
     'Phone', 'Camera', 'Download'
  ];
  
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {icons.map((icon, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <MyIcon icon={icon} size={24} />
          <span style={{ fontSize: '12px', color: '#999' }}>{icon}</span>
        </div>
      ))}
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| icon | `string` | - | 图标名称（Element Plus 图标库） |
| size | `number` | `16` | 图标大小（单位：px） |
| color | `string` | - | 图标颜色 |
| className | `string` | - | 自定义类名 |