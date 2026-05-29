//MyLink的类型
export type LinkType='primary'|'success'|'info'|'warning'|'danger'
//是否出现下划线
export type LinkUnderline='always'|'hover'|'never'
//是新页面打开，还是在旧页面打开
export type LinkTarget='_blank'|'_parent'|'_self'|'_top'
export default interface MyLinkProps{
  type?:LinkType//类型
  underline?:LinkUnderline//什么时候出现下划线
  disabled?:boolean//是否禁用
  href?:string//链接的原生href属性
  target?:LinkTarget//跳转方式
  icon?:string
  children?:React.ReactNode
}

