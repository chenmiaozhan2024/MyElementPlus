import type {MyIconProps} from './type.ts';
import * as React from "react";
import {Icon} from '@iconify/react'
const MyIcon:React.FC<MyIconProps>=(props)=>{
    const {icon,size=16,color,className}=props
    return (
        <span>
            <Icon
                icon={`ep:${icon.toLowerCase()}`}
                width={size}
                height={size}
                color={color}
                className={className}>
            </Icon>
        </span>
    )
}
export default MyIcon