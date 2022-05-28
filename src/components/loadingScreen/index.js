// components/loadingScreen/index.js
import { LinearProgress, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import style from "./LoadingScreen.module.css"

export default function LoadingScreen( { loading = true } ) {
    if (!loading) return ""
    return (
        <Box className={style.bgModal}>
            <Typography
                sx={{textAlign:"center", margin:"auto", mt:"40%"}}
            >
               <LinearProgress/> 
               <br/>Loading...
            </Typography>
        </Box>
    )
}
