// ■---- userBtn\index.js
import { Button } from "@mui/material"
import Router from "next/router"
import { getUserSession } from "../userSession"
import LogOutIcon from '@mui/icons-material/Logout'
import { useEffect, useState } from "react"

export default function UserBtn() {
let userSession
const [userId, setUserId] = useState(null)
useEffect(() => {
    userSession = getUserSession()
    if (userSession) {
        setUserId(userSession.userId)
    }
}, [userId])   
const click = () => {
        if (userId) {
            let confirmation = confirm('Bạn muốn thoát hệ thống?')
            if (confirmation) {
                if (typeof window !== 'undefined') {
                    localStorage.clear()
                    Router.push('/login')
                }    
            }    
        } else {
            Router.push('/login')
        }
    }
    return(
        <Button 
            sx={{ml:"10px"}} 
            color={userId?"error":"primary"} 
            variant="contained" 
            disableElevation 
            size="lg" 
            onClick={click} 
            endIcon={userId?<LogOutIcon />:""}
        >
            {userId?`${userId} `:"Đăng nhập"}
        </Button>
    )
}