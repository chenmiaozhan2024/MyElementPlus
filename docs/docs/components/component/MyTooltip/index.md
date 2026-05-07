# MyTooltip 文字提示

文字提示组件，用于在鼠标悬停或点击时显示额外的提示信息。

## 基本用法

默认使用 hover 方式触发，鼠标悬停在元素上时显示提示。

```tsx preview
import { MyTooltip, MyButton } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyTooltip content="这是一个提示内容">
        <MyButton type="primary">悬停提示</MyButton>
      </MyTooltip>
      <MyTooltip content="另一个提示信息">
        <span style={{ color: '#409EFF', cursor: 'pointer' }}>悬停显示提示</span>
      </MyTooltip>
    </div>
  );
}
```

## 不同位置

通过 `placement` 属性设置提示框的显示位置，支持 top、bottom、left、right 四个方向。

```tsx preview
import { MyTooltip, MyButton } from '@my-element/components';

export default function Demo2() {
  const placements = ['top', 'bottom', 'left', 'right'];
  
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {placements.map((placement) => (
        <MyTooltip key={placement} content={`${placement} 提示`} placement={placement}>
          <MyButton>{placement}</MyButton>
        </MyTooltip>
      ))}
    </div>
  );
}
```

## 点击触发

通过 `trigger` 属性设置触发方式为 `click`，点击元素时显示/隐藏提示。

```tsx preview
import { MyTooltip, MyButton } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyTooltip content="点击显示的提示" trigger="click">
        <MyButton type="success">点击提示</MyButton>
      </MyTooltip>
      <MyTooltip content="点击显示/隐藏" trigger="click">
        <MyButton type="warning">点击切换</MyButton>
      </MyTooltip>
    </div>
  );
}
```

## 延迟显示

通过 `openDelay` 和 `closeDelay` 属性设置提示的显示和隐藏延迟。

```tsx preview
import { MyTooltip, MyButton } from '@my-element/components';

export default function Demo4() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyTooltip content="延迟 1 秒显示" openDelay={1000}>
        <MyButton>悬停 1 秒后显示</MyButton>
      </MyTooltip>
      <MyTooltip content="离开后延迟 1 秒隐藏" closeDelay={1000}>
        <MyButton type="info">离开后延迟隐藏</MyButton>
      </MyTooltip>
      <MyTooltip content="双向延迟" openDelay={500} closeDelay={500}>
        <MyButton type="danger">双向延迟</MyButton>
      </MyTooltip>
    </div>
  );
}
```

## 手动控制

通过 `manual` 属性设置为手动控制模式，配合 ref 调用 show 和 hide 方法。

```tsx preview
import { MyTooltip, MyButton } from '@my-element/components';
import { useRef } from 'react';

export default function Demo5() {
  const tooltipRef = useRef(null);
  
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyTooltip 
        ref={tooltipRef} 
        content="手动控制的提示" 
        manual 
      >
        <MyButton>提示目标</MyButton>
      </MyTooltip>
      <MyButton type="primary" onClick={() => tooltipRef.current?.show()}>
        显示提示
      </MyButton>
      <MyButton type="danger" onClick={() => tooltipRef.current?.hide()}>
        隐藏提示
      </MyButton>
    </div>
  );
}
```

## 复杂内容

提示内容可以是任意 React 元素。

```tsx preview
import { MyTooltip, MyButton, MyIcon } from '@my-element/components';

export default function Demo6() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <MyTooltip 
        content={
          <div style={{ padding: '8px 12px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>用户信息</div>
            <div style={{ fontSize: '12px', color: '#666' }}>
              <div>姓名：张三</div>
              <div>部门：技术部</div>
              <div>职位：前端工程师</div>
            </div>
          </div>
        }
      >
        <MyButton type="primary">
          <MyIcon icon="User" />
          <span style={{ marginLeft: '4px' }}>查看详情</span>
        </MyButton>
      </MyTooltip>
    </div>
  );
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | `ReactNode` | - | 提示内容 |
| placement | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | 提示框位置 |
| trigger | `'hover' \| 'click'` | `'hover'` | 触发方式 |
| manual | `boolean` | `false` | 是否手动控制模式 |
| openDelay | `number` | `0` | 显示延迟（毫秒） |
| closeDelay | `number` | `0` | 隐藏延迟（毫秒） |
| popperOptionsType | `Partial<Options>` | - | Popper.js 配置选项 |

### 方法

| 方法名 | 说明 |
| --- | --- |
| show | 显示提示框 |
| hide | 隐藏提示框 |