import { MySelect } from "@my-element/components";
import { useState } from "react";

const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
  { label: '选项四', value: '4', disabled: true },
]

const MySelectTest = () => {
  const [test, setTest] = useState('')
  return (
    <MySelect modelValue={test} options={options} onUpdateModelValue={setTest} placeholder="请选择" clearable filterable/>
  )
}

export default MySelectTest