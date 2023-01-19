import React, {useEffect,useState, useMemo} from "react"
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Project = ({},context)=>{

    const classes = useStyles()

    return (
        <div>

            project
            
        </div>
    )


}
export default Project