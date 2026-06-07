import {MySelectProps,SelectOption, SelectStates} from './type'
import './style.css'
import classNames from 'classnames'
import MyInput from '../MyInput/MyInput'
import type { InputInstance } from '../MyInput/type'
import MyTooltip from '../MyTooltip/MyTooltip'
import {TooltipInstance} from '../MyTooltip/type'
import MyIcon from '../MyIcon/MyIcon'
import { useState,useRef, useMemo } from 'react'
const MySelect=(props:MySelectProps)=>{
  const {modelValue,options,placeholder,disabled,onVisibleChange,onChange,onUpdateModelValue,clearable,onClear} =props
  const classes=classNames('my-select',{
    'is-disabled':disabled
  })
   const findOption=(value:string)=>{
    const option =options.find((option)=>option.value===value)
    return option?option:null
  }
  const [initalOption,setInitalOption]=useState(findOption(modelValue))
  const [innerValue,setInnerValue]=useState(initalOption?initalOption.label:'')
  const [states,setStates]=useState<SelectStates>({
    inputValue:initalOption?initalOption.label:'',
    selectedOption:initalOption,
    mouseHover:false
  })
  const popperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      phase: 'beforeWrite' as const,
      requires: ['computeStyles'],
      fn({ state }: { state: any }) {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
    },
  ],
};
  // <MyTooltip></MyTooltip>
 const content = (
    <ul className='my-select__menu'>
      {options.map((item) => (
        <li
          key={item.value}
          className={classNames('my-select__menu-item', {
            'is-disabled': item.disabled,
            'is-select': states.selectedOption?.value === item.value,
          })}
          id={`select-item-${item.value}`}
          onClick={() => itemSelect(item)}
        >
          {item.label}
          
        </li>
      ))}
    </ul>
  )
  const TooltipRef=useRef<TooltipInstance>(null)
  const InputRef=useRef<InputInstance>(null)
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
  const itemSelect=(e:SelectOption)=>{
    if(e.disabled) return
    setStates({
      inputValue:e.label,
      selectedOption:e,
      mouseHover:true
    })
    // setInnerValue(e.label)
    onChange?.(e.value)
    onUpdateModelValue?.(e.value)
    controlDropdown(false)
    InputRef.current?.focus()
  }
   const showClearIcon=useMemo(()=>{
    return clearable&&states.mouseHover&&states.selectedOption&&states.inputValue.trim()!==''
  },[clearable,states.mouseHover,states.selectedOption,states.inputValue])
  // const 
  const suffix = (
    <>
      {showClearIcon ? (
        <div className="my-select__clear" onClick={(e) => {
          e.stopPropagation()
          setStates({ inputValue: '', selectedOption: null, mouseHover: false })
          onClear?.()
          onChange?.('')
          onUpdateModelValue?.('')
        }}>
          <MyIcon icon="circle-close" />
        </div>
      ) : (
        <MyIcon icon="arrow-down" className={classNames('header-angle', { 'is-active': isDropdownShow })} />
      )}
    </>
  )
 
  return (
    <div className={classes} onClick={toggleDropdown} onMouseEnter={() => setStates(prev => ({ ...prev, mouseHover: true }))} onMouseLeave={() => setStates(prev => ({ ...prev, mouseHover: false }))}>
      <MyTooltip placement='bottom-start' manual content={content} ref={TooltipRef} popperOptionsType={popperOptions} onClickOutSide={(visible) => controlDropdown(visible)}>
        <MyInput modelValue={states.inputValue} suffix={suffix}
        placeholder={placeholder} disabled={disabled} readonly ref={InputRef}></MyInput>
      </MyTooltip>
    </div>
  )

}
export default MySelect