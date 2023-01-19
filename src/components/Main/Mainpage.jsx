import React, {useEffect,useState, useMemo} from "react"
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import Navigation from "./Navigation";
import Blank from "./Blank";
const useStyles = makeStyles(()=>({
    main:{
        border:"1px solid",
        display: "flex"
        }
}))

const Mainpage = ({},context)=>{

    const classes = useStyles()

    return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //     <Route  element={<Home />} />
    //     {/* <Route path="blogs" element={<Blogs />} /> */}
    //     <Route path="contact" element={<Navigation />} />
    //     <Route path="*" element={<Navigation />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>

</>
    )


}
export default Mainpage