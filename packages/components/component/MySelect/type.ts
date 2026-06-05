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
  onUpdateModelValue?:(value:string)=>void
  onChange?:(value:string)=>void
  onVisibleChange?:(value:boolean)=>void
}