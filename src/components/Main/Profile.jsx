import React, { useEffect, useState, useMemo } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import cv2022 from '../../assets/cv2022.pdf'
import FileSaver from "file-saver";


const useStyles = makeStyles(() => ({
    main: {
        border: "1px solid",
        display: "flex"
    }
}))

const Profile = ({ }, context) => {

    const classes = useStyles()

    const DownloadCv = () => {
        FileSaver.saveAs(cv2022, "Kyle CV.pdf")
    }
    

    return (
        <div>
            <Button variant="outlined" onClick={DownloadCv} >click to download my cv</Button>

        </div>
    )


}
export default Profile