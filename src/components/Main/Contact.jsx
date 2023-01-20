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
        "column-gap": "20vw",
        "row-gap": "6vh",
        justifyContent: "center"
    }
}))

const Contact = ({ }, context) => {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Chip
                avatar={<EmailIcon />}
                label="Email"
                variant="outlined"
                href="mailto:kyle147@ymail.com"
                component="a"
                clickable
            />
            <Chip
                avatar={<GitHubIcon />}
                label="GitHub"
                variant="outlined"
                component="a"
                href="https://github.com/wkyle251"
                clickable
            />
            <Chip
                avatar={<InstagramIcon />}
                label="Instagram"
                variant="outlined"
                component="a"
                href="https://www.instagram.com/wkyle_1"
                clickable
            />
            <Chip
                avatar={<PhonelinkRingIcon />}
                label="Phone"
                variant="outlined"
                component="a"
                href="Tel:+852 97114437"
                clickable
            />
            <Chip
                avatar={<img src={signalIcon} />}
                label="Signal"
                variant="outlined"
                component="a"
                href="sgnl://signal.me/#p/+852 97114437"
                clickable
            />
            <Chip
                avatar={<WhatsAppIcon />}
                label="WhatsApp"
                variant="outlined"
                component="a"
                href="https://wa.me/85297114437"
                clickable
            />



        </div>
    )


}
export default Contact