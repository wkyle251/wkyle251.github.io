import React, {useEffect,useState, useMemo} from "react"
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Contact = ({},context)=>{

    const classes = useStyles()

    return (
        <div>

            contact
            
        </div>
    )


}
export default Contact