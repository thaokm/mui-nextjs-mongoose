// ■---- customAppBar\index.js
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import LocalPoliceIcon from "@mui/icons-material/LocalPoliceOutlined";
import UserBtn from "../userBtn"
import Router from 'next/router'

export default function CustomAppBar({button, pageName}) {
    const homeClick = () => {
        Router.push('/')
    }
    return(
        <AppBar position="sticky" elevation={1} sx={{backdropFilter:"blur(20px)", background:"#4285f411", color:"#000"}}>
            <Toolbar>
                <IconButton size='medium' edge='start' color='inherit' aria-label="menu" sx={{mr:2}} onClick={homeClick}>
                    <LocalPoliceIcon />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow:1}}>
                    {pageName}
                </Typography>
                {button}
                <UserBtn />
            </Toolbar>
        </AppBar>
    )
}