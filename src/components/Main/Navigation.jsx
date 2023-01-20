import React, { useEffect, useState, useMemo } from "react"
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const useStyles = makeStyles(() => ({
    main: {
        color: "#00ffff",
        marginBottom: 20,
        padding: 5
    },

}))

const Navigation = ({ }, context) => {

    const classes = useStyles()

    const navigate = useNavigate();
    const location = useLocation();

    const [value, setValue] = useState("");
    
    useEffect(()=>{
        setValue(location.pathname)
    },[location])

    const page = ["Home", "Project", "Introduction", "Profile", "Contact"]
    const compo = [<HomeIcon />, <AssignmentIcon />, <FormatAlignCenterIcon />, <AccountBoxIcon />, <ContactPhoneIcon />]

    return (
        <div className={classes.main}>
            <BottomNavigation
                sx={{
                    bgcolor: "#c19434",
                    borderRadius: "15px",
                }}
                showLabels
                onChange={(event, val) => {
                    setValue(val)
                    navigate(val)
                }}
                value={value}
                children={
                    page.map((x, i) =>
                        <BottomNavigationAction
                            label={x}
                            value={`/${x}`}
                            icon={compo[i]}
                            key={i}
                        />
                    )
                }
            />

        </div>
    )
}
export default Navigation