import React, { useEffect, useState, useMemo } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import InstagramIcon from '@mui/icons-material/Instagram';
import signalIcon from '../../assets/signalIcon.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles(() => ({
    main: {
        display: "grid",
        "grid-template-columns": "repeat(3,1fr)",
        // "column-gap": "5%",
        "row-gap": "6vh",
        justifyContent: "center"
    }
}))

const Contact = ({ }, context) => {

    const classes = useStyles()

    const infoList = [
        {
            label: "Email",
            href: "mailto:kyle147@ymail.com",
            icon: <EmailIcon />
        },
        {
            label: "GitHub",
            href: "https://github.com/wkyle251",
            icon: <GitHubIcon />
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/wkyle_1",
            icon: <InstagramIcon />
        },
        {
            label: "Phone",
            href: "Tel:+852 97114437",
            icon: <PhonelinkRingIcon />
        },
        {
            label: "Signal",
            href: "sgnl://signal.me/#p/+852 97114437",
            icon: <img src={signalIcon} />
        },
        {
            label: "WhatsApp",
            href: "https://wa.me/85297114437",
            icon: <WhatsAppIcon />
        },
    ]


    return (
        <div className={classes.main}>

            {infoList.map(x =>
                <Chip
                    avatar={x.icon}
                    label={x.label}
                    variant="outlined"
                    href={x.href}
                    component="a"
                    clickable
                    key={x.label}
                    sx={{
                        "padding":"1vh 3vw 1vh 3vw",
                        "width":"20vw",
                        justifySelf:"center"
                    }}
                />
            )}

        </div>
    )


}
export default Contact