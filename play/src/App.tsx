// import MyButton from '@my-element/components/component/MyButton/MyButton.tsx'
// import { MyIcon, MySwitch } from '@my-element/components'
// import {MyTag} from '@my-element/components'
import {MyLink} from '@my-element/components'
// import type { ButtonProps } from '@my-element/components/component/MyButton/type'
function App() {
  return (
    <>
     {/* <MyTag closable>Tag 1</MyTag>
     <div></div>
     <MyTag closable type='success'>Tag 1</MyTag>
     <div></div>
     <MyTag closable type='success' effect='plain' round>Tag 1</MyTag> */}
      {/* <MyLink type='primary'>default</MyLink> */}
      <MyLink type='primary'>primary</MyLink>
      <MyLink type='success'>success</MyLink>
      <MyLink type='warning'>warning</MyLink>
      <MyLink type='danger'>danger</MyLink>
       <MyLink type='info'>info</MyLink>
    </>
  )
}

export default App
