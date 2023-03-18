import React, { useEffect, useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from 'react-scroll-motion'
import Boxer from '../Project/Boxer'
const useStyles = makeStyles(() => ({
  main: {
    border: '1px solid',
    display: 'flex'
  }
}))

const Home = ({}, context) => {
  const classes = useStyles()
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())

  return (
    <div>
      <div style={{ fontSize: '30px' }}>Hello Welcome To My WebSite 😀</div>
      <div style={{ fontSize: '30px' ,paddingBottom:"30px"}}>
        Im using ChatGPT to generate the text!
      </div>

      <div style={{"width":"30%","margin":"auto"}}>
        <Boxer />
      </div>

      <div style={{ fontSize: '30px' ,marginTop:"50px"}}>
        I only have CV and Contact page.😆
      </div>
      <div style={{ marginTop:"50px"}}>
        (Waiting lazy update on this page)
      </div>
    </div>
  )
}
export default Home
