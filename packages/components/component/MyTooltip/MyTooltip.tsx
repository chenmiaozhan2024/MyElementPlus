import {forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState} from "react";
import type {TooltipProps,TooltipInstance} from './type'
import type {Instance} from '@popperjs/core'
import {createPopper} from '@popperjs/core'
import useClickOutside from "@my-element/utils/hooks/useClickOutside.js";
import { debounce } from 'lodash-es'
import './style.css'
import classNames from "classnames";
const MyTooltip=forwardRef<TooltipInstance,TooltipProps>((props, ref)=>{
    const {content,placement='bottom',children,trigger='hover',manual=false,popperOptionsType,openDelay=0,closeDelay=0,onClickOutSide}=props
    const [isOpen,setIsOpen]=useState<boolean>(false)
    // 弹出层的ref
    const popperNode=useRef<HTMLDivElement|null>(null)
    // 触发层的ref
    const triggerNode=useRef<HTMLDivElement|null>(null)
    // poperInstance
    const poperInstance=useRef<Instance|null>(null)
    const poperContainerNode=useRef<HTMLDivElement|null>(null)
    const popperOption=useMemo(()=>{
        return {
            placement:placement,
            ...popperOptionsType
        }
    },[placement,popperOptionsType])
    let openTime=0
    let closeTime=0
    const open=()=>{
        openTime++
        console.log(`open Time${openTime}`);
        setIsOpen(true)
    
    }
    const close=()=>{
        closeTime++
        console.log(`closeTime${closeTime}`);
        setIsOpen(false)
        
    }
    const openDeBounce=debounce(open,openDelay)
    const closeDeBounce=debounce(close,closeDelay)
    const openFinal=()=>{
        closeDeBounce.cancel()  // 取消 closeDeBounce
        openDeBounce()
    }

    const closeFinal=()=>{
        openDeBounce.cancel()   // 取消 openDeBounce
        closeDeBounce()
    }
    const togglePopper=()=>{
        // 如果本来就是打开的
        if(isOpen){
            closeFinal()
        }else{
            openFinal()
        }
    }
    // const open=()=>{
    //     setIsOpen(true)
    // }
    // const close=()=>{
    //     setIsOpen(false)
    // }
    //暴露出打开和关闭两种方法
    useImperativeHandle(ref,()=>({
        show: openFinal,
        hide: closeFinal
    }))
    useClickOutside(poperContainerNode,()=>{
        if(trigger==='click'&&isOpen===true&&!manual){
            closeFinal()
        }
        if(isOpen){
            onClickOutSide?.(false)
        }
    })
    const eventHandler={
        onMouseEnter:trigger==='hover'&&!manual?openFinal:undefined,

        onClick:trigger==='click'&&!manual?togglePopper:undefined
    }
    const outEventHandler={
        onMouseLeave:trigger==='hover'&&!manual?closeFinal:undefined,
    }
    useEffect(() => {
        if(popperNode.current&&triggerNode.current&&isOpen){
            poperInstance.current=createPopper(triggerNode.current,popperNode.current,popperOption)
        }
    }, [isOpen,popperOption]);
    // 弹出层类名
    const popperClassNames = classNames('my-tooltip__popper', {
        'is-active': isOpen,
    })
    return (
        <div className={"my-tooltip"} {...outEventHandler}  style={{
            display: "inline-flex",   // 关键：同行显示
            whiteSpace: "nowrap",     // 关键：不换行
        }} ref={poperContainerNode}>
            {/* 触发层*/}
            <div className={"my-tooltip__trigger"}  ref={triggerNode} {...eventHandler}>
                {children}
            </div>
            {
                isOpen&&(
                    <div ref={popperNode} className={popperClassNames}>
                        <div id="arrow"></div>
                        {content}
                    </div>
                )
            }
        </div>
    )
})
export default MyTooltip