import {MySelectProps} from './type'
import './style.css'
import classNames from 'classnames'
import MyInput from '../MyInput/MyInput'
import MyTooltip from '../MyTooltip/MyTooltip'
import {TooltipInstance} from '../MyTooltip/type'
import { useState,useRef } from 'react'
const MySelect=(props:MySelectProps)=>{
  const {modelValue,options,placeholder,disabled,onVisibleChange} =props
  const classes=classNames('my-select',{
    'is-disabled':disabled
  })
  const [innerValue,setInnerValue]=useState()
  // <MyTooltip></MyTooltip>
  const liClasses=classNames('my-select__menu-item',{'is-disabled':disabled})
 const content = (
    <ul className='my-select__menu'>
      {options.map((item) => (
        <li
          key={item.value}  // 必须加 key
          className={liClasses}
          id={`select-item-${item.value}`}
          // id=`{select-item-${item.value}}`
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
  const TooltipRef=useRef<TooltipInstance>(null)
  const [isDropdownShow,setIsDropDownShow]=useState<boolean>(false)
  const controlDropdown=(show:boolean)=>{
    if(show){
      TooltipRef.current?.show()
    }else{
      TooltipRef.current?.hide()
    }
    setIsDropDownShow(show)
    onVisibleChange?.(show)
  }
  const toggleDropdown=()=>{
    if(props.disabled) return
    //是打开状态
    if(isDropdownShow){
      controlDropdown(false)
    }else{
      controlDropdown(true)
    }
  }
  return (
    <div className={classes} onClick={toggleDropdown}>
      <MyTooltip placement='bottom-start' manual content={content} ref={TooltipRef}>
        <MyInput modelValue={innerValue} placeholder={placeholder} disabled={disabled}></MyInput>
      </MyTooltip>
    </div>
  )

}
export default MySelect