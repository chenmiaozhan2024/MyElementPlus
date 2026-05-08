# MySwitch 开关

开关选择器，用于在两种状态之间进行切换。

## 基本用法

默认使用布尔值 `true` 和 `false` 作为开关状态。

```tsx preview
import { MySwitch } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MySwitch />
      <MySwitch modelValue={true} />
    </div>
  );
}
```

## 不同尺寸

通过 `size` 属性设置开关的尺寸。

```tsx preview
import { MySwitch } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MySwitch size="small" />
        <span style={{ fontSize: '12px', color: '#999' }}>small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MySwitch />
        <span style={{ fontSize: '12px', color: '#999' }}>default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <MySwitch size="large" />
        <span style={{ fontSize: '12px', color: '#999' }}>large</span>
      </div>
    </div>
  );
}
```

## 禁用状态

通过 `disabled` 属性禁用开关。

```tsx preview
import { MySwitch } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MySwitch disabled />
      <MySwitch modelValue={true} disabled />
    </div>
  );
}
```

## 自定义文本

通过 `activeText` 和 `inactiveText` 属性设置开关两侧的文本。

```tsx preview
import { MySwitch } from '@my-element/components';

export default function Demo4() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MySwitch activeText="开" inactiveText="关" />
      <MySwitch modelValue={true} activeText="是" inactiveText="否" />
    </div>
  );
}
```

## 自定义值

通过 `activeValue` 和 `inactiveValue` 属性自定义开关的值。

```tsx preview
import { MySwitch } from '@my-element/components';

export default function Demo5() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MySwitch activeValue="开启" inactiveValue="关闭" />
      <MySwitch modelValue={1} activeValue={1} inactiveValue={0} />
    </div>
  );
}
```

## 事件处理

使用 `onChange` 和 `onUpdateModelValue` 处理开关状态变化。

```tsx preview
import { MySwitch, MyButton } from '@my-element/components';
import { useState } from 'react';

export default function Demo6() {
  const [value, setValue] = useState(true);
  
  const handleChange = (newValue) => {
    console.log('开关状态变为:', newValue);
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MySwitch 
        modelValue={value} 
        onUpdateModelValue={setValue}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', gap: '12px' }}>
        <MyButton onClick={() => setValue(true)}>设置为开启</MyButton>
        <MyButton onClick={() => setValue(false)}>设置为关闭</MyButton>
      </div>
      <p>当前状态: {value ? '开启' : '关闭'}</p>
    </div>
  );
}
```

## 受控模式

通过 `modelValue` 和 `onUpdateModelValue` 实现受控模式。

```tsx preview
import { MySwitch } from '@my-element/components';
import { useState } from 'react';

export default function Demo7() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MySwitch 
        modelValue={checked} 
        onUpdateModelValue={setChecked}
      />
      <span>状态: {checked ? '✓ 开启' : '✗ 关闭'}</span>
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `any` | - | 当前值 |
| disabled | `boolean` | `false` | 是否禁用 |
| activeText | `string` | - | 激活状态下显示的文本 |
| inactiveText | `string` | - | 非激活状态下显示的文本 |
| name | `string` | - | 原生 input 元素的 name 属性 |
| size | `'small' \| 'default' \| 'large'` | `'default'` | 开关尺寸 |
| activeValue | `any` | `true` | 激活状态的值 |
| inactiveValue | `any` | `false` | 非激活状态的值 |

### 事件

| 事件名 | 类型 | 说明 |
| --- | --- | --- |
| onChange | `(value: any) => void` | 开关状态改变时触发 |
| onUpdateModelValue | `(value: any) => void` | 更新 modelValue 的回调 |