import React, { useEffect, useState, useMemo } from "react"
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const useStyles = makeStyles(() => ({
    main: {
        border: "1px solid",
        // display: "grid",
        // "grid-template-columns": "repeat(4, 25%)"
    },

}))

const Navigation = ({ }, context) => {

    const classes = useStyles()
    const navigate = useNavigate();

    const page = ["Home","Project","Introduction","Profile","Contact"]
    const compo = [<HomeIcon/>,<AssignmentIcon/>,<FormatAlignCenterIcon/>,<AccountBoxIcon/>,<ContactPhoneIcon/>]

    return (
        <div className={classes.main}>
            <BottomNavigation
                showLabels
                onChange={(event, val) => {
                    console.log(val)
                    navigate(val)
                }}
            >
                {page.map((x,i) =>
                    <BottomNavigationAction label={x} value={`/${x}`} icon={compo[i]} key={i} />
                )}
            </BottomNavigation>
        </div>
    )
}
export default Navigation