// import MyButton from '@my-element/components/component/MyButton/MyButton.tsx'
// import { MyIcon, MySwitch } from '@my-element/components'
// import {MyTag} from '@my-element/components'
// import {MyLink} from '@my-element/components'
import {MyButton, MyInput} from '@my-element/components'
import { useState } from 'react';
function App() {
  const [value, setValue] = useState('hello');

  return (
    <div>
      <MyInput modelValue={value}  onUpdateModelValue={setValue}  showPassword type='password'/>
      <p>当前值: {value}</p>
      <MyButton onClick={() => setValue('changed')} type='primary'>外部修改</MyButton>
    </div>
  );
}

export default App
