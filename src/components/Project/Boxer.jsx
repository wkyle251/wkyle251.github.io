import React, { useEffect, useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(() => ({
  main: {
    border: '1px solid',
    display: 'flex'
  }
}))

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)
const card = (
  <React.Fragment>
    <CardContent >
    <Typography variant='h5' component='div'>
      The first song i made!
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        guitar
      </Typography>
    <audio src={"./firsttry.m4a"} controls/>
      {/* <Typography variant='body2'>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>
    {/* <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions> */}
  </React.Fragment>
)
const Boxer = ({}, context) => {
  const classes = useStyles()

  return (
    <Box sx={{opacity: 0.5}}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  )
}
export default Boxer
