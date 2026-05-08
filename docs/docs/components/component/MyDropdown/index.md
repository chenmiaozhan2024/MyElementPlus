# MyDropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基本用法

使用 `menuOptions` 属性配置下拉菜单的选项。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  return (
    <MyDropdown menuOptions={menuOptions}>
      <MyButton>下拉菜单</MyButton>
    </MyDropdown>
  );
}
```

## 不同触发方式

通过 `trigger` 属性设置触发方式，支持 `hover`（悬停）和 `click`（点击）。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo2() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <MyDropdown menuOptions={menuOptions} trigger="hover">
        <MyButton>悬停触发</MyButton>
      </MyDropdown>
      <MyDropdown menuOptions={menuOptions} trigger="click">
        <MyButton>点击触发</MyButton>
      </MyDropdown>
    </div>
  );
}
```

## 不同位置

通过 `placement` 属性设置下拉菜单的位置，支持 `top`、`bottom`、`left`、`right`。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo3() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <MyDropdown menuOptions={menuOptions} placement="top">
        <MyButton>上方</MyButton>
      </MyDropdown>
      <MyDropdown menuOptions={menuOptions} placement="bottom">
        <MyButton>下方</MyButton>
      </MyDropdown>
      <MyDropdown menuOptions={menuOptions} placement="left">
        <MyButton>左侧</MyButton>
      </MyDropdown>
      <MyDropdown menuOptions={menuOptions} placement="right">
        <MyButton>右侧</MyButton>
      </MyDropdown>
    </div>
  );
}
```

## 禁用菜单项

通过设置 `disabled: true` 禁用菜单项。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo4() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二（禁用）', disabled: true },
    { key: '3', label: '选项三' },
  ];

  return (
    <MyDropdown menuOptions={menuOptions}>
      <MyButton>下拉菜单</MyButton>
    </MyDropdown>
  );
}
```

## 分割线

通过设置 `divided: true` 在菜单项之间添加分割线。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo5() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三', divided: true },
    { key: '4', label: '选项四' },
  ];

  return (
    <MyDropdown menuOptions={menuOptions}>
      <MyButton>下拉菜单</MyButton>
    </MyDropdown>
  );
}
```

## 点击后不关闭

通过设置 `hideAfterClick={false}` 使菜单项点击后不关闭下拉菜单。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';

export default function Demo6() {
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <MyDropdown menuOptions={menuOptions}>
        <MyButton>点击后关闭</MyButton>
      </MyDropdown>
      <MyDropdown menuOptions={menuOptions} hideAfterClick={false}>
        <MyButton>点击后不关闭</MyButton>
      </MyDropdown>
    </div>
  );
}
```

## 手动控制

通过 `manual` 属性和 ref 方法手动控制下拉菜单的显示与隐藏。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';
import { useRef } from 'react';

export default function Demo7() {
  const dropdownRef = useRef(null);
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <MyDropdown menuOptions={menuOptions} ref={dropdownRef} manual>
        <MyButton>手动控制</MyButton>
      </MyDropdown>
      <MyButton onClick={() => dropdownRef.current?.show()}>打开</MyButton>
      <MyButton onClick={() => dropdownRef.current?.hide()}>关闭</MyButton>
    </div>
  );
}
```

## 事件处理

使用 `onselect` 处理菜单项点击事件，使用 `visibleChange` 处理下拉菜单显示/隐藏事件。

```tsx preview
import { MyDropdown, MyButton } from '@my-element/components';
import { useState } from 'react';

export default function Demo8() {
  const [selected, setSelected] = useState('');
  const [visible, setVisible] = useState(false);
  
  const menuOptions = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  const handleSelect = (event, value) => {
    console.log('选中:', value);
    setSelected(value.label);
  };

  const handleVisibleChange = (event, value) => {
    console.log('可见性变化:', value);
    setVisible(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MyDropdown 
        menuOptions={menuOptions}
        onselect={handleSelect}
        visibleChange={handleVisibleChange}
      >
        <MyButton>下拉菜单</MyButton>
      </MyDropdown>
      <div>
        <p>当前选中: {selected || '无'}</p>
        <p>菜单状态: {visible ? '打开' : '关闭'}</p>
      </div>
    </div>
  );
}
```

## 复杂内容

菜单项的 `label` 支持传入 ReactNode，可以实现复杂的菜单内容。

```tsx preview
import { MyDropdown, MyButton, MyIcon } from '@my-element/components';

export default function Demo9() {
  const menuOptions = [
    { 
      key: '1', 
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MyIcon icon="User" />
          <span>用户管理</span>
        </div>
      )
    },
    { 
      key: '2', 
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MyIcon icon="Setting" />
          <span>系统设置</span>
        </div>
      )
    },
    { 
      key: '3', 
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MyIcon icon="Message" />
          <span>消息中心</span>
        </div>
      )
    },
  ];

  return (
    <MyDropdown menuOptions={menuOptions}>
      <MyButton>带图标的菜单</MyButton>
    </MyDropdown>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| menuOptions | `MenuOption[]` | - | 菜单选项数组 |
| trigger | `'hover' \| 'click'` | `'hover'` | 触发方式 |
| placement | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | 下拉菜单位置 |
| manual | `boolean` | `false` | 是否手动控制 |
| hideAfterClick | `boolean` | `true` | 点击菜单项后是否关闭 |
| openDelay | `number` | `0` | 显示延迟（毫秒） |
| closeDelay | `number` | `0` | 隐藏延迟（毫秒） |
| popperOptionsType | `Partial<Options>` | - | Popper.js 配置选项 |

### MenuOption 类型

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| key | `string \| number` | - | 菜单项唯一标识 |
| label | `string \| ReactNode` | - | 菜单项内容 |
| disabled | `boolean` | `false` | 是否禁用 |
| divided | `boolean` | `false` | 是否显示分割线 |
| children | `ReactNode` | - | 子菜单内容 |

### 事件

| 事件名 | 类型 | 说明 |
| --- | --- | --- |
| onselect | `(e: 'select', value: MenuOption) => void` | 菜单项点击时触发 |
| visibleChange | `(e: 'visible-change', value: boolean) => void` | 下拉菜单显示/隐藏时触发 |

### 方法

| 方法名 | 说明 |
| --- | --- |
| show | 显示下拉菜单 |
| hide | 隐藏下拉菜单 |