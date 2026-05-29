//MyTag的类型
export type TagType='primary'|'success'|'info'|'warning'|'danger'
//MyTag的大小
export type TagSize='large'|'small'
//MyTag的主题
export type TagEffect='dark'|'light'|'plain'
import React from "react"
export default interface MyTagProps {
  closable?:boolean//是否可以关闭
  type?:TagType //Tag类型
  disableTransitions?:boolean//是否禁用渐变动画
  hit?:boolean//是否边框有描边
  color?:string //背景颜色
  size?:TagSize//大小
  effect?:TagEffect//Tag主题
  round?:boolean//是否是圆形
  onClick?:()=>void
  onClose?:()=>void
  children:React.ReactNode
}