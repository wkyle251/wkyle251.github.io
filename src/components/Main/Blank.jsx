import React, {useEffect,useState, useMemo} from "react"
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Blank = ({},context)=>{

    const classes = useStyles()

    return (
        <div>

            The Url is not found
        </div>
    )


}
export default Blank