import React, {useEffect,useState, useMemo} from "react"
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Home = ({},context)=>{

    const classes = useStyles()

    return (
        <div>

            Hi! I'm going to update this website.
            <div>
            Desktop view only!

            </div>
            Improving.

        </div>
    )


}
export default Home