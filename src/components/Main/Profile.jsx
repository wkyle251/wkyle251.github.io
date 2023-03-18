import React, { useEffect, useState, useMemo } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
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

    const cvfile = "./cv2023.pdf"

    const DownloadCv = () => {
        FileSaver.saveAs(cvfile, "Kyle CV.pdf")
    }

    const docs = [
        { uri: cvfile, },
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