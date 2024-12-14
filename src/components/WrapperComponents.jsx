import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Paper } from '@mui/material'

const WrapperComponents = ({children}) => {
  return (
    <>
        <Header/>
        <Paper elevation={3} sx={{minHeight:500}} >
            {children}
        </Paper>
        <Footer/>
    </>
  )
}

export default WrapperComponents