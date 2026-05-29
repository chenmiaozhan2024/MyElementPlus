// import MyButton from '@my-element/components/component/MyButton/MyButton.tsx'
// import { MyIcon, MySwitch } from '@my-element/components'
import {MyTag} from '@my-element/components'
// import type { ButtonProps } from '@my-element/components/component/MyButton/type'
function App() {
  return (
    <>
     <MyTag closable>Tag 1</MyTag>
     <div></div>
     <MyTag closable type='success'>Tag 1</MyTag>
     <div></div>
     <MyTag closable type='success' effect='plain' round>Tag 1</MyTag>
     
    </>
  )
}

export default App
