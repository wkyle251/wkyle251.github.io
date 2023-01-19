import React, { useEffect, useState, useMemo } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import { redirect, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    main: {
        // border: "1px solid",
        margin: "auto",
        "&:hover":{
            cursor:"pointer"
        }
        // display: "grid",
        // "grid-template-columns": "repeat(4, 25%)"
    },

}))

const NavigationItem = ({ title, icon }, context) => {

    const classes = useStyles()

    const navigate = useNavigate();
    const Clickdirect = (title) => {
        if (title == "Home")
            navigate('/')
        else
            navigate(`/${title}`)
            // let history = useNavigate();
        // history('/')
        // console.log(history);
        console.log("should direct")
        // console.log(redirect("/222"))
    }

    return (
        <div className={classes.main}>
            
            
            <div onClick={() => {
                Clickdirect(title)
            }}>{icon}{title}</div>

        </div>
    )
}
export default NavigationItem