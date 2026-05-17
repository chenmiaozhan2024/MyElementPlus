import {MessageProps,MessageInstance} from './type'
import {forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState} from "react";
import classNames from 'classnames'
import MyIcon from "../MyIcon/MyIcon";
import './style.css'
import {getLastBottomOffset, subscribeInstancesChange, notifyInstancesChange} from './method'
const MyMessage=forwardRef<MessageInstance,MessageProps>((props,ref)=>{
    const {message,during=3000,showClose,type='info',onDestory,id,offset=20,zIndex}=props
    const classes=classNames('my-message',{[`my-message--${type}`]:type,[`is-close`]:showClose})
    const [revision, setRevision] = useState(0)
    useEffect(() => {
        return subscribeInstancesChange(() => setRevision(r => r + 1))
    }, [])

    //控制message组件是否显示
    const [visible,setVisible]=useState<boolean>(true)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)
    function startTimer(){
       if(during===0) return
        timerRef.current = setTimeout(()=>{
            setVisible(false)
        },during)
        return ()=>clearTimeout(timerRef.current!)
    }
 
    const onChangeVisible=()=>{
        console.log('onChangeVisible')
       setVisible(false)
    }

    useEffect(() => {
        const clearTimer = startTimer()
        return clearTimer
        }, [during])
    useEffect(() => {
        if (!visible) {
            // 等动画结束（可选）再真正销毁
            const timer = setTimeout(() => {
                onDestory?.(); // 调用你传过来的 destroy()
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [visible, onDestory]);
    const messageRef=useRef<HTMLDivElement>(null)
    //这个div的高度
    const [height,setHeight]=useState<number>(0)
    //上一个实例的最下面的坐标数字，第一个是0
    const lastOffset=useMemo(()=>{
        return getLastBottomOffset(id!)
    },[id, revision])
    //这个元素应该使用的顶部top
    const topOffset=useMemo(()=>{
       return offset+lastOffset!
    },[offset,lastOffset])
    //这个元素为下一个元素预留的offset，也就是这个元素最低端的bottom的值
    const bottomOffset=useMemo(()=>{
       return  height+topOffset
    },[height,topOffset])
    useEffect(() => {
        notifyInstancesChange()
    }, [bottomOffset])
    const cssStyle=useMemo(()=>{
        return {
            top:topOffset+'px',
            zIndex,
        }
    },[topOffset, zIndex])
    useEffect(() => {
        const updateHeight = () => {
            const h = messageRef.current?.offsetHeight || 0
            setHeight(h)
        }
        updateHeight()
        const observer = new ResizeObserver(updateHeight)
        observer.observe(messageRef.current!)
    }, [])
    useImperativeHandle(ref, () => ({
        setVisible,
        height,
        bottomOffset: bottomOffset,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), [bottomOffset])
    // const typeIconMap: Record<string, string> = {
    //     success: 'success-filled',
    //     info: 'info-filled',
    //     warning: 'warning-filled',
    //     error: 'circle-close-filled',
    // }
    return (
        <>
            {visible&&<div className={classes} role={'alert'} ref={messageRef} style={cssStyle} >
               
                <div className="my-message_content">
                    {message}
                </div>
                {showClose&&<div className="my-message__close" onClick={onChangeVisible}>
                    <MyIcon icon="close"  ></MyIcon>
                </div>
                }
            </div>}
        </>

    )
})
export default  MyMessage