export interface SelectOption{
  label:string,
  value:string,
  disabled?:boolean
}
export interface MySelectProps{
  modelValue:string,
  options:SelectOption[],
  placeholder?:string,
  disabled?:boolean,
  clearable?:boolean,//是否展示清空
  onUpdateModelValue?:(value:string)=>void
  onChange?:(value:string)=>void
  onVisibleChange?:(value:boolean)=>void
  onClear?:()=>void
}
export interface SelectStates{
  inputValue:string
  selectedOption:null|SelectOption
  mouseHover:boolean//是否是hover状态
}