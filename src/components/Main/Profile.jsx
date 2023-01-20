import React, { useEffect, useState, useMemo } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import cv2022 from '../../assets/cv2022.pdf'
import FileSaver from "file-saver";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const useStyles = makeStyles(() => ({
    main: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        height: "80vh",
        overflow: "Hidden",
    }
}))

const Profile = ({ }, context) => {

    const classes = useStyles()

    const DownloadCv = () => {
        FileSaver.saveAs(cv2022, "Kyle CV.pdf")
    }

    const docs = [
        { uri: cv2022, },
    ];

    return (
        <div className={classes.main}>
            <div>
                <Button variant="outlined" onClick={DownloadCv} >click to download my cv</Button>

            </div>
            <DocViewer
                config={{
                    header: {
                        disableHeader: true,
                        retainURLParams: false,
                    },
                }}
                pluginRenderers={DocViewerRenderers}
                documents={docs}
                style={{

                }}
            />

        </div>
    )


}
export default Profile