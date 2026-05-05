import MyButton from '@my-element/components/component/MyButton/MyButton.tsx'
import { MyIcon } from '@my-element/components'
// import type { ButtonProps } from '@my-element/components/component/MyButton/type'
function App() {
  return (
    <>
      <div style={{ padding: '20px' }}>
         <h2>MyButton组件演练</h2>
            <MyButton type="default" >Default</MyButton>
            <MyButton type="primary">primary</MyButton>
            <MyButton type="success">success</MyButton>
            <MyButton type="info">info</MyButton>
            <MyButton type="warning">warning</MyButton>
            <MyButton type="danger">danger</MyButton>
           
            <div style={{ height: '20px' }}></div>
            <MyButton type="default" plain={true}>Default</MyButton>
            <MyButton type="primary" plain={true}>primary</MyButton>
            <MyButton type="success" plain={true}>success</MyButton>
            <MyButton type="info" plain={true}>info</MyButton>
            <MyButton type="warning" plain={true}>warning</MyButton>
            <MyButton type="danger" plain={true}>danger</MyButton>
            <div style={{ height: '20px' }}></div>
            <MyButton type="default"  round={true}>Default</MyButton>
            <MyButton type="primary"  round={true}>primary</MyButton>
            <MyButton type="success"  round={true}>success</MyButton>
            <MyButton type="info"     round={true}>info</MyButton>
            <MyButton type="warning"  round={true}>warning</MyButton>
            <MyButton type="danger"   round={true}>danger</MyButton>
            <div style={{ height: '20px' }}></div>
            <MyButton type="default"  dashed={true} >Default</MyButton>
            <MyButton type="primary"  dashed={true} >primary</MyButton>
            <MyButton type="success"  dashed={true} >success</MyButton>
            <MyButton type="info"     dashed={true} >info</MyButton>
            <MyButton type="warning"  dashed={true} >warning</MyButton>
            <MyButton type="danger"   dashed={true} >danger</MyButton>
            <div style={{ height: '20px' }}></div>
            <MyButton icon="search"  circle={true}></MyButton>
            <MyButton type="primary" icon="Edit"  circle={true}></MyButton>
            <MyButton type="success" icon="Check"  circle={true}></MyButton>
            <MyButton type="info" icon="Message"  circle={true}></MyButton>
            <MyButton type="warning" icon="Star"  circle={true}></MyButton>
            <MyButton type="danger" icon="Delete"  circle={true}></MyButton>
             <div style={{ height: '20px' }}></div>
               <MyButton>
                <MyIcon icon='search'></MyIcon>
               
                <a href="https://www.baidu.com">点击跳转到百度</a>
                 <MyIcon icon='plus'></MyIcon>
               </MyButton>
      </div>
    </>
  )
}

export default App
