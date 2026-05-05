# MyButton 按钮

这是 MyButton 组件的文档页面，展示了按钮组件的各种用法和样式。

## 基本用法
可以使用,`plain`,`round`,`dashed`和`cicle`,`icon`来定义按钮的样式
```tsx preview
import { MyButton } from '@my-element/components';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', }}>
            <MyButton type="Default" >Default</MyButton>
            <MyButton type="primary">primary</MyButton>
            <MyButton type="success">success</MyButton>
            <MyButton type="info">info</MyButton>
            <MyButton type="warning">warning</MyButton>
            <MyButton type="danger">danger</MyButton>
            <div style={{width:'100%' }}></div>
            <MyButton type="Default" plain={true}>Default</MyButton>
            <MyButton type="primary" plain={true}>primary</MyButton>
            <MyButton type="success" plain={true}>success</MyButton>
            <MyButton type="info" plain={true}>info</MyButton>
            <MyButton type="warning" plain={true}>warning</MyButton>
            <MyButton type="danger" plain={true}>danger</MyButton>
           <div style={{width:'100%' }}></div>
            <MyButton type="Default"  round={true}>Default</MyButton>
            <MyButton type="primary"  round={true}>primary</MyButton>
            <MyButton type="success"  round={true}>success</MyButton>
            <MyButton type="info"     round={true}>info</MyButton>
            <MyButton type="warning"  round={true}>warning</MyButton>
            <MyButton type="danger"   round={true}>danger</MyButton>
             <div style={{width:'100%' }}></div>
            <MyButton type="Default"  dashed={true} >Default</MyButton>
            <MyButton type="primary"  dashed={true} >primary</MyButton>
            <MyButton type="success"  dashed={true} >success</MyButton>
            <MyButton type="info"     dashed={true} >info</MyButton>
            <MyButton type="warning"  dashed={true} >warning</MyButton>
            <MyButton type="danger"   dashed={true} >danger</MyButton>
             <div style={{width:'100%' }}></div>
            <MyButton icon="search"  circle={true}></MyButton>
            <MyButton type="primary" icon="Edit"  circle={true}></MyButton>
            <MyButton type="success" icon="Check"  circle={true}></MyButton>
            <MyButton type="info" icon="Message"  circle={true}></MyButton>
            <MyButton type="warning" icon="Star"  circle={true}></MyButton>
            <MyButton type="danger" icon="Delete"  circle={true}></MyButton>
    </div>
  );
}
```
## 禁用状态
可以使用 `disabled` 属性来定义按钮是否被禁用。
该属性接受一个布尔值，`true` 表示禁用，`false` 表示不禁用（默认）。

``` tsx preview
  import { MyButton } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="Default" disabled>Default</MyButton>
      <MyButton type="primary" disabled>primary</MyButton>
      <MyButton type="success" disabled>success</MyButton>
      <MyButton type="info" disabled>info</MyButton>
      <MyButton type="warning" disabled>warning</MyButton>
      <MyButton type="danger" disabled>danger</MyButton>
    </div>
  );
}
```
## 按钮虚线边框
可以通过设置dashed属性来给按钮设置一个虚线边框，dashed接受一个布尔值
```tsx preview
import { MyButton } from '@my-element/components';
export default function Demo3(){
  return (
    <div> 
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="default" dashed>Default</MyButton>
      <MyButton type="primary" dashed>primary</MyButton>
      <MyButton type="success"dashed>success</MyButton>
      <MyButton type="info" dashed>info</MyButton>
      <MyButton type="warning" dashed>warning</MyButton>
      <MyButton type="danger" dashed>danger</MyButton>
    </div>
    </div>
  )
}
```

## 按钮图标
可以通过设置icon属性来给按钮设置图标。
```tsx preview
import { MyButton } from '@my-element/components';
export default function Demo4(){
  return (
    <div> 
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="default" icon="Edit"></MyButton>
      <MyButton type="primary" icon="Share"></MyButton>
      <MyButton type="success" icon="Delete"></MyButton>
      <MyButton type="info" icon="Search"></MyButton>
      <MyButton type="warning" icon="Plus"></MyButton>
      <MyButton type="danger" icon="Minus"></MyButton>
    </div>
    </div>
  )
}
```

## 加载状态的按钮
设置loading属性控制按钮是否属于加载静态
```tsx preview
import { MyButton } from '@my-element/components';
export default function Demo5(){
  return (
    <div> 
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="default" loading>Default</MyButton>
      <MyButton type="primary" loading>primary</MyButton>
      <MyButton type="success" loading>success</MyButton>
      <MyButton type="info" loading>info</MyButton>
      <MyButton type="warning" loading>warning</MyButton>
      <MyButton type="danger" loading>danger</MyButton>
    </div>
    </div>
  )
}
```

## 按钮大小
size如果不传，有默认大小，同时也支持传递"larget"和“small”两个属性来控制按钮的大小
```tsx preview
import { MyButton } from '@my-element/components';
export default function Demo6(){
  return (
    <div> 
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="default" size="large">primary</MyButton>
      <MyButton type="default">Default</MyButton>
      <MyButton type="default" size="small">success</MyButton>
      <div style={{width:'100%' }}></div>
      <MyButton type="default" size="large" icon="search"></MyButton>
      <MyButton type="default" icon="search"></MyButton>
      <MyButton type="default" size="small" icon="search"></MyButton>
    </div>
    </div>
  )
}
```

## children属性使用
可以理解成一个默认插槽，里面可以放如何内容
```tsx preview
import { MyButton } from '@my-element/components';
import {MyIcon} from '@my-element/components'
export default function Demo7(){
  return (
    <div> 
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton>
          <MyIcon icon='search'></MyIcon>
          <a href="https://www.baidu.com">点击跳转到百度</a>
          <MyIcon icon='plus'></MyIcon>
      </MyButton>
    </div>
    </div>
  )
}
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'default'` | 按钮类型 |
| size | `'large' \| 'default' \| 'small'` | `'default'` | 按钮大小 |
| plain | `boolean` | `false` | 是否为朴素按钮 |
| round | `boolean` | `false` | 是否为圆角按钮 |
| dashed | `boolean` | `false` | 是否为虚线边框按钮 |
| circle | `boolean` | `false` | 是否为圆形按钮 |
| icon | `string` | - | 按钮图标名称 |
| disabled | `boolean` | `false` | 是否禁用按钮 |
| loading | `boolean` | `false` | 是否为加载状态 |

### 事件

| 事件名 | 类型 | 说明 |
| --- | --- | --- |
| onClick | `(e: MouseEvent<HTMLButtonElement>) => void` | 点击按钮时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| children | 按钮内容，可以是文本、图标或其他 React 元素 |
