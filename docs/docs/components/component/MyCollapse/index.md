# MyCollapse 折叠面板

折叠面板组件，用于将内容区域进行折叠/展开显示，节省页面空间。

## 基本用法

默认情况下，折叠面板支持同时展开多个面板。

```tsx preview
import { MyCollapse, MyCollapseItem } from '@my-element/components';

export default function Demo() {
  return (
    <MyCollapse>
      <MyCollapseItem name="1" title="面板一">
        这是面板一的内容，可以包含任意内容。折叠面板可以帮助您在有限的空间内展示更多信息。
      </MyCollapseItem>
      <MyCollapseItem name="2" title="面板二">
        这是面板二的内容，支持多行文本和复杂内容结构。
      </MyCollapseItem>
      <MyCollapseItem name="3" title="面板三">
        这是面板三的内容，点击面板标题可以展开或折叠内容区域。
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## 手风琴模式

设置 `accordion` 属性为 `true`，即可启用手风琴模式，此时只能展开一个面板。

```tsx preview
import { MyCollapse, MyCollapseItem } from '@my-element/components';

export default function Demo2() {
  return (
    <MyCollapse accordion>
      <MyCollapseItem name="1" title="手风琴面板一">
        在风琴模式下，每次只能展开一个面板。当展开新面板时，之前展开的面板会自动折叠。
      </MyCollapseItem>
      <MyCollapseItem name="2" title="手风琴面板二">
        这是第二个手风琴面板的内容。
      </MyCollapseItem>
      <MyCollapseItem name="3" title="手风琴面板三">
        这是第三个手风琴面板的内容。
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## 默认展开

通过 `modelValue` 属性可以指定默认展开的面板。

```tsx preview
import { MyCollapse, MyCollapseItem } from '@my-element/components';

export default function Demo3() {
  return (
    <MyCollapse modelValue={['1', '3']}>
      <MyCollapseItem name="1" title="默认展开面板一">
        此面板默认处于展开状态。
      </MyCollapseItem>
      <MyCollapseItem name="2" title="面板二">
        此面板默认处于折叠状态。
      </MyCollapseItem>
      <MyCollapseItem name="3" title="默认展开面板三">
        此面板也默认处于展开状态。
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## 禁用面板

通过 `disabled` 属性可以禁用某个面板，禁用后的面板无法点击展开。

```tsx preview
import { MyCollapse, MyCollapseItem } from '@my-element/components';

export default function Demo4() {
  return (
    <MyCollapse>
      <MyCollapseItem name="1" title="可展开面板">
        这个面板可以正常展开和折叠。
      </MyCollapseItem>
      <MyCollapseItem name="2" title="禁用面板" disabled>
        这个面板已被禁用，无法点击展开。
      </MyCollapseItem>
      <MyCollapseItem name="3" title="另一个可展开面板">
        这个面板也可以正常展开和折叠。
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## 自定义标题

使用 `titleSlot` 属性可以自定义标题内容。

```tsx preview
import { MyCollapse, MyCollapseItem, MyIcon } from '@my-element/components';

export default function Demo5() {
  return (
    <MyCollapse>
      <MyCollapseItem 
        name="1" 
        titleSlot={
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MyIcon icon="Folder" />
            <span>自定义标题</span>
          </span>
        }
      >
        使用 titleSlot 可以自定义标题区域的内容。
      </MyCollapseItem>
      <MyCollapseItem 
        name="2" 
        titleSlot={
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MyIcon icon="Settings" />
            <span>设置面板</span>
          </span>
        }
      >
        可以在标题中添加图标等元素。
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## 复杂内容

折叠面板可以包含复杂的内容结构。

```tsx preview
import { MyCollapse, MyCollapseItem, MyButton } from '@my-element/components';

export default function Demo6() {
  return (
    <MyCollapse>
      <MyCollapseItem name="1" title="表单内容">
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>用户名：</label>
            <input 
              type="text" 
              placeholder="请输入用户名"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>密码：</label>
            <input 
              type="password" 
              placeholder="请输入密码"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <MyButton type="primary" style={{ width: '100%' }}>提交</MyButton>
        </div>
      </MyCollapseItem>
      <MyCollapseItem name="2" title="列表内容">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>列表项一</li>
          <li>列表项二</li>
          <li>列表项三</li>
          <li>列表项四</li>
        </ul>
      </MyCollapseItem>
    </MyCollapse>
  );
}
```

## API

### MyCollapse 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `nameType[]` | `[]` | 受控模式下的激活面板名称数组 |
| accordion | `boolean` | `false` | 是否为手风琴模式 |
| onChange | `(activeNames: nameType[]) => void` | - | 面板切换时的回调 |
| onUpdateModelValue | `(activeNames: nameType[]) => void` | - | 更新 modelValue 的回调 |

### MyCollapseItem 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `nameType` | - | 面板唯一标识 |
| title | `string` | - | 面板标题 |
| titleSlot | `ReactNode` | - | 自定义标题插槽 |
| disabled | `boolean` | `false` | 是否禁用面板 |