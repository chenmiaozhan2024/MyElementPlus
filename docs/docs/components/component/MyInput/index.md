# MyInput 输入框

输入框组件，用于接收用户输入的文本内容。支持多种类型、尺寸、禁用状态、一键清空、密码切换、前后置内容等功能。

## 基本用法

通过 `modelValue` 和 `onUpdateModelValue` 实现双向数据绑定。

```tsx preview
import { MyInput } from '@my-element/components';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} placeholder="请输入内容" />
      <p>当前值: {value}</p>
    </div>
  );
}
```

## 禁用状态

通过 `disabled` 属性禁用输入框。

```tsx preview
import { MyInput } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue="不可编辑的内容" disabled />
    </div>
  );
}
```

## 只读状态

通过 `readonly` 属性将输入框设置为只读状态，内容不可编辑。

```tsx preview
import { MyInput } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue="只读的文本内容" readonly placeholder="只读状态" />
      <MyInput modelValue="只读的文本域内容" type="textarea" readonly />
    </div>
  );
}
```

## 一键清空

设置 `clearable` 属性后，输入框获得焦点且有值时，会显示清空图标，点击即可清空内容。

```tsx preview
import { MyInput } from '@my-element/components';
import { useState } from 'react';

export default function Demo4() {
  const [value, setValue] = useState('点击清空');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} clearable placeholder="输入内容后点击清空图标" />
    </div>
  );
}
```

## 密码输入框

设置 `type` 为 `password` 并配合 `showPassword` 属性，可以切换密码的显示与隐藏。

```tsx preview
import { MyInput } from '@my-element/components';
import { useState } from 'react';

export default function Demo5() {
  const [value, setValue] = useState('123456');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} type="password" showPassword placeholder="请输入密码" />
    </div>
  );
}
```

## 不同尺寸

通过 `size` 属性设置输入框大小，支持 `large` 和 `small` 两种尺寸，不设置则为默认大小。

```tsx preview
import { MyInput } from '@my-element/components';
import { useState } from 'react';

export default function Demo6() {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} size="large" placeholder="大尺寸" />
      <MyInput modelValue={value} onUpdateModelValue={setValue} placeholder="默认尺寸" />
      <MyInput modelValue={value} onUpdateModelValue={setValue} size="small" placeholder="小尺寸" />
    </div>
  );
}
```

## 前缀和后缀

通过 `prefix` 和 `suffix` 属性在输入框内部添加前缀和后缀内容。

```tsx preview
import { MyInput, MyIcon } from '@my-element/components';
import { useState } from 'react';

export default function Demo7() {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} prefix={<MyIcon icon="Search" />} placeholder="搜索" />
      <MyInput modelValue={value} onUpdateModelValue={setValue} suffix={<MyIcon icon="Message" />} placeholder="请输入" />
    </div>
  );
}
```

## 前置和后置内容

通过 `preped` 和 `append` 属性在输入框外部添加前置和后置内容。

```tsx preview
import { MyInput, MyButton } from '@my-element/components';
import { useState } from 'react';

export default function Demo8() {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} preped="https://" placeholder="请输入网址" />
      <MyInput modelValue={value} onUpdateModelValue={setValue} append={<MyButton type="primary">搜索</MyButton>} placeholder="请输入关键词" />
      <MyInput modelValue={value} onUpdateModelValue={setValue} preped="https://" append=".com" placeholder="请输入域名" />
    </div>
  );
}
```

## 文本域

设置 `type` 为 `textarea` 可以使用多行文本输入。

```tsx preview
import { MyInput } from '@my-element/components';
import { useState } from 'react';

export default function Demo9() {
  const [value, setValue] = useState('');
  return (
    <div style={{ maxWidth: '400px' }}>
      <MyInput modelValue={value} onUpdateModelValue={setValue} type="textarea" placeholder="请输入多行文本" />
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'text' \| 'textarea' \| 'password'` 等 | `'text'` | 输入框类型 |
| size | `'large' \| 'small'` | - | 输入框尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| readonly | `boolean` | `false` | 是否只读 |
| clearable | `boolean` | `false` | 是否可一键清空 |
| showPassword | `boolean` | `false` | 是否显示密码切换图标 |
| preped | `ReactNode` | - | 前置内容（输入框外部） |
| append | `ReactNode` | - | 后置内容（输入框外部） |
| prefix | `ReactNode` | - | 前缀内容（输入框内部） |
| suffix | `ReactNode` | - | 后缀内容（输入框内部） |
| modelValue | `string` | - | 输入框的值 |
| placeholder | `string` | - | 占位文本 |
| autocomplete | `string` | `'off'` | 原生 autocomplete 属性 |
| autofocus | `boolean` | `false` | 是否自动聚焦 |
| form | `string` | - | 原生 form 属性 |

### 事件

| 事件名 | 类型 | 说明 |
| --- | --- | --- |
| onUpdateModelValue | `(value: string) => void` | 输入内容变化时触发，用于双向绑定 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框前缀内容 |
| suffix | 输入框后缀内容 |
| preped | 输入框前置内容 |
| append | 输入框后置内容 |
