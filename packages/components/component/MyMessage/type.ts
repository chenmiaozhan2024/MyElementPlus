import React from "react";
import type { ReactElement } from 'react';
export interface MessageProps{
    message?:string|React.ReactNode
    during?:number;
    showClose?:boolean;
    type?:'success'|'info'|'warning'|'error';
    onDestory:()=>void;
    id?:string;
    offset?:number
    zIndex?:number
}
export interface MessageInstance {
    show: () => void
    hide: () => void
    bottomOffset?: number 
}
export interface MessageContext{
    id:string;
    vnode:ReactElement;
    props:MessageProps
    ref:React.RefObject<MessageInstance | null>
    onDestory:()=>void
}

export type CreateMessageProps=Omit<MessageProps, 'onDestory'|'id'>
