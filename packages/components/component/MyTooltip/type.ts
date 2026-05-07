import  type {Placement,Options} from '@popperjs/core'
import React from "react";
export  interface  TooltipProps{
    children?: React.ReactNode,
    content?:React.ReactNode|string,
    trigger?:'hover'|'click',
    placement?:Placement,
    manual?:boolean//true 手动控制，通过按钮控制，false 自动控制
    popperOptionsType?:Partial<Options>,
    openDelay?:number//打开延迟
    closeDelay?:number//关闭延迟
}
export interface TooltipInstance{
    show:()=>void
    hide:()=>void
}