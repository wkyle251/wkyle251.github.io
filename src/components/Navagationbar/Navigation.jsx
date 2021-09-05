import React, {useEffect,useState, useMemo} from "react"
import NavigationItem from "./NavagateItem"

import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Navigation = ({},context)=>{

    const classes = useStyles()

    return (
        <div className={classes.main}>
            this is navagation bar
            <NavigationItem title="contact" />
            <NavigationItem title="contact" />
            <NavigationItem title="contact" />
            <NavigationItem title="contact" />
        </div>
    )
}
export default Navigation