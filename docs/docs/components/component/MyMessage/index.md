# MyMessage 消息提示

消息提示组件，用于在页面顶部展示全局反馈信息。支持多种类型、自动关闭、手动关闭等功能，多个消息会自动堆叠排列。

## 基本用法

通过 `createMessage` 方法创建消息提示，传入 `message` 属性设置消息内容。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo() {
  const showMessage = () => {
    createMessage({ message: '这是一条消息提示' });
  };

  return (
    <MyButton type="primary" onClick={showMessage}>显示消息</MyButton>
  );
}
```

## 不同类型

通过 `type` 属性设置消息类型，支持 `success`、`info`、`warning`、`error` 四种类型，默认为 `info`。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo2() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="info" onClick={() => createMessage({ message: '普通消息', type: 'info' })}>Info</MyButton>
      <MyButton type="success" onClick={() => createMessage({ message: '成功消息', type: 'success' })}>Success</MyButton>
      <MyButton type="warning" onClick={() => createMessage({ message: '警告消息', type: 'warning' })}>Warning</MyButton>
      <MyButton type="danger" onClick={() => createMessage({ message: '错误消息', type: 'error' })}>Error</MyButton>
    </div>
  );
}
```

## 自动关闭

通过 `during` 属性设置消息显示的持续时间（毫秒），到期后自动关闭。默认为 `3000` 毫秒，设置为 `0` 则不自动关闭。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo3() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="primary" onClick={() => createMessage({ message: '3 秒后关闭', during: 3000 })}>3 秒关闭</MyButton>
      <MyButton type="primary" onClick={() => createMessage({ message: '5 秒后关闭', during: 5000 })}>5 秒关闭</MyButton>
      <MyButton type="primary" onClick={() => createMessage({ message: '不会自动关闭', during: 0 })}>不自动关闭</MyButton>
    </div>
  );
}
```

## 可关闭

设置 `showClose` 属性为 `true`，消息右侧会显示关闭按钮，点击即可手动关闭。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo4() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton onClick={() => createMessage({ message: '可关闭的消息', showClose: true })}>可关闭</MyButton>
      <MyButton type="success" onClick={() => createMessage({ message: '成功消息', type: 'success', showClose: true })}>成功 + 可关闭</MyButton>
      <MyButton type="warning" onClick={() => createMessage({ message: '警告消息', type: 'warning', showClose: true })}>警告 + 可关闭</MyButton>
    </div>
  );
}
```

## 自定义偏移

通过 `offset` 属性设置消息距离顶部的偏移量，默认为 `20`。多个消息会自动堆叠排列。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo5() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MyButton type="primary" onClick={() => createMessage({ message: '默认偏移 20px', offset: 20 })}>默认偏移</MyButton>
      <MyButton type="primary" onClick={() => createMessage({ message: '偏移 60px', offset: 60 })}>大偏移</MyButton>
    </div>
  );
}
```

## 手动关闭实例

`createMessage` 返回一个消息实例，调用实例的 `onDestory` 方法可以手动关闭消息。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';
import { useState } from 'react';

export default function Demo6() {
  const [instance, setInstance] = useState(null);

  const open = () => {
    const msg = createMessage({ message: '点击下方按钮关闭我', during: 0, showClose: true });
    setInstance(msg);
  };

  const close = () => {
    instance?.onDestory();
    setInstance(null);
  };

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <MyButton type="primary" onClick={open}>打开消息</MyButton>
      <MyButton type="danger" onClick={close} disabled={!instance}>关闭消息</MyButton>
    </div>
  );
}
```

## 使用 ReactNode

`message` 属性支持传入 `React.ReactNode`，可以展示更丰富的内容。

```tsx preview
import { createMessage, MyButton } from '@my-element/components';

export default function Demo7() {
  const showRichMessage = () => {
    createMessage({
      message: (
        <span>
          <strong>重要通知：</strong>系统将于今晚维护
        </span>
      ),
      type: 'warning',
      during: 5000,
    });
  };

  return (
    <MyButton type="warning" onClick={showRichMessage}>显示富文本消息</MyButton>
  );
}
```

## API

### createMessage 方法

调用 `createMessage(props)` 创建一条消息提示，返回 `MessageContext` 实例。

```ts
import { createMessage } from '@my-element/components';

const instance = createMessage({
  message: '提示内容',
  type: 'info',
});
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| message | `string \| React.ReactNode` | - | 消息内容 |
| type | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` | 消息类型 |
| during | `number` | `3000` | 消息显示持续时间（毫秒），设为 `0` 则不自动关闭 |
| showClose | `boolean` | `false` | 是否显示关闭按钮 |
| offset | `number` | `20` | 距离顶部的偏移量（px） |

### MessageContext 实例

`createMessage` 返回的对象包含以下属性：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 消息实例的唯一标识 |
| vnode | `ReactElement` | 消息组件的虚拟节点 |
| props | `MessageProps` | 消息组件的属性 |
| ref | `RefObject<MessageInstance \| null>` | 消息组件的引用 |
| onDestory | `() => void` | 调用可手动关闭该消息 |

### MessageInstance 方法

通过 `ref` 可以访问消息组件实例的方法：

| 方法名 | 说明 |
| --- | --- |
| show | 显示消息 |
| hide | 隐藏消息 |
