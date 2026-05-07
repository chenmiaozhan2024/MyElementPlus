import React,{ useState} from "react";
import type {CollapseProps,nameType} from './type'
import {CollapseContext} from './CollapseContext'

const MyCollapse:React.FC<CollapseProps>=(CollapseProps)=>{
    const {children,modelValue,accordion=false,onChange,onUpdateModelValue}=CollapseProps
    const isControlled=modelValue!==undefined
   const [activeNames,setActiveNames]=useState<nameType[]>([])

    const handleItemClick = (item: nameType) => {
        let newActiveNames: nameType[];

        if (accordion) {
            newActiveNames = activeNames.includes(item) ? [] : [item];
        } else {
            const index = activeNames.indexOf(item);
            if (index > -1) {
                newActiveNames = activeNames.filter((name) => name !== item);
            } else {
                newActiveNames = [...activeNames, item];
            }
        }

        if(!isControlled){
            setActiveNames(newActiveNames);
        }

        onChange?.(newActiveNames);
        onUpdateModelValue?.(newActiveNames);
    };

    const mergedActiveNames=isControlled?modelValue:activeNames

    return (
        <CollapseContext.Provider value={{activeNames:mergedActiveNames,handleItemClick}}>
            <div className="my-collapse">{children}</div>
        </CollapseContext.Provider>
    )
}
export default MyCollapse