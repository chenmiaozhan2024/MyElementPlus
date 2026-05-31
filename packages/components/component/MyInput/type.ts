export interface MyInputProps{
  type?:string,//input类型
  size?:'large'|'small',
  disabled?:boolean,
  clearable?:boolean,//是否支持一键清空
  showPassword?:boolean,//是否展示密码
  preped?:React.ReactNode,
  append?:React.ReactNode,
  prefix?:React.ReactNode,
  suffix?:React.ReactNode,
  modelValue?:string,
  placeholder?:string,
  readonly?:boolean,
  autocomplete?:string,
  autofocus?:boolean,
  form?:string,
  onUpdateModelValue?:(value:string)=>void;
  
}