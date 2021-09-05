import React, {useEffect,useState, useMemo} from "react"

const NavigationItem = ({title},context)=>{


    const clickdirect = (title) =>{
        console.log(title)
    }

    return (
        <div>
            <div onClick={()=>{
                clickdirect(title)
            }}>{title}</div>
            
        </div>
    )
}
export default NavigationItem