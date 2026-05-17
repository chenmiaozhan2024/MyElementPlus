import React, {createElement} from 'react'
import type { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import {CreateMessageProps, MessageContext,MessageInstance,MessageProps} from './type'
import MessageConstructor from './Message'
import {nextZIndex} from '@my-element/utils/hooks/useZIndex'
let seed=1
export const instances: MessageContext[] = []

type Listener = () => void
const listeners: Listener[] = []

export const subscribeInstancesChange = (listener: Listener) => {
    listeners.push(listener)
    return () => {
        const idx = listeners.indexOf(listener)
        if (idx > -1) listeners.splice(idx, 1)
    }
}

export const notifyInstancesChange = () => {
    listeners.forEach(l => l())
}

export const createMessage = (props: CreateMessageProps) => {
    // 1. 创建容器 div
    const container = document.createElement('div')
    const id=`message_${seed++}`
    const destory=()=>{
        //销毁，同时需要删除instances数组项
        const index=instances.findIndex((item)=>item.id===id)
        if(index===-1) return
        //删除数组中对应的项
        instances.splice(index,1)
        notifyInstancesChange()
        root.render(null)
        //把外层的div也移除
        container.remove()
    }
    const newProps:MessageProps={
        ...props,
        onDestory:destory,
        id,
        zIndex:nextZIndex()
    }
    const messageRef = React.createRef<MessageInstance>()
    // 2. 创建组件
    const vnode:ReactElement = createElement(MessageConstructor, {...newProps, ref: messageRef})
    console.log('vnode',vnode)
    // 3. React 18/19 标准渲染写法
    const root = createRoot(container)
    root.render(vnode)
    const manualDestroy = () => {
        const instance = instances.find((item) => item.id === id)
        if (!instance) return
        instance.ref.current?.hide()
    }
    // 4. 挂载到 body
    document.body.appendChild(container)
    const instance:MessageContext={
        id,
        vnode,
        props:newProps,
        ref:messageRef,
        onDestory:manualDestroy
    }
    instances.push(instance)
    notifyInstancesChange()
    return instance
}


export const getLastInstance=()=>{
    return instances.at(-1)
}
//获取上一个元素的offset
export const getLastBottomOffset=(id:string)=>{
    const idx=instances.findIndex((item)=>item.id===id)
    if(idx<=0){
        return 0
    }else{
        const prev= instances[idx-1]
        return prev.ref.current?.bottomOffset || 0
    }
}
