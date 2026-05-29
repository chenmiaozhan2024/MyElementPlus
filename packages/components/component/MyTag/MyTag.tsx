import MyTagProps from './type'
import classNames from 'classnames'
import MyIcon from '../MyIcon/MyIcon'
import './style.css'
import { useState } from 'react'
const MyTag=(props:MyTagProps)=>{
    const {
      type='primary',
      closable=false,//是否允许关闭
      disableTransitions=false,//是否禁用动画
      hit=false,//是否边框有描边
      color,//背景颜色
      size,//大小
      effect='light',//主题
      round=false,//是否圆形
      children
    }=props
    const classes=classNames('my-tag',{
      [`is-round`]:round,
      [`is-closable`]:closable,
      [`is-disabledTransitions`]:disableTransitions,
      ['is-hit']:hit,
      [`my-tag--${type}`]:type,
      [`my-tag--${size}`]:size,
      [`my-tag--${effect}`]:effect!=='light',
    })
    //是否关闭
    const [isShow,setIsShow]=useState<boolean>(true)
    const handleClose=()=>{
      setIsShow(false)
      props.onClose?.()
    }
    if(!isShow) return null
    return (
      <button className={classes}>
        {children}
        {closable&& <div onClick={handleClose}><MyIcon icon='close' className='my-tag__icon'></MyIcon></div> }
      </button>
    )
}
export default MyTag