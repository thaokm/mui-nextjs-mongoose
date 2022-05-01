// ■---- login\index.js
import { Card, Stack, Typography, CardContent, Button, FormControlLabel, TextField, Switch } from "@mui/material"
import { useState } from "react"
import { userList } from "./user"
import { setUserSession } from "../userSession"
import Router from 'next/router'
import CustomAppBar from "../customAppBar"
import CustomHead from "../customHead"
import LogInIcon from "@mui/icons-material/Login"

const authenUser = (userId, password) => {
    let userNo = userList.findIndex((user) => user.userId == userId)
    if (userNo >= 0 ) {
        if (userList[userNo].password == password) {
            return {code: 'success', text: '', data: userList[userNo]}
        } else {
            return {code: 'err', text: 'sai mật khẩu'}
        }
    } else {
        return {code: 'err', text: 'người dùng không tồn tại'}
    }    
}

// TEST API
const authUserAPI = (userId, password) => {
    fetch('/api/user/user', {
          method: 'POST',
          body: JSON.stringify({userId: userId, password: password})
    })
    .then(res => res.json()) 
    //khi dùng fetch, response trả về là 1 HTTP Response, cần dùng method .json() để lấy được json từ body của nó
    .then(data => {
        console.log('response from server...')
        console.log(data)
    })
}
// TEST API

let password = ''

export default function Login({pageName="Login"}) {
    const [authStt, setAuthStt] = useState('')
    const [userId, setUserId] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        if (userId=='' || password=='') {
            alert('không để trống')
        } else {
            let authCheck = authenUser(userId, password)
            authUserAPI(userId, password)
            setAuthStt(authCheck.text)
            if (authCheck.code == 'success') {
                let status = setUserSession(authCheck.data.userId, authCheck.data.name, authCheck.data.authority)
                Router.back()
            }
        }
    }
    const handleCheckbox = (e) => {
        setIsChecked(e.target.checked)
    }
    return(
        <>
            <CustomHead title={pageName} />
            <CustomAppBar pageName={pageName}/>
            <Stack direction="column" justifyContent="center" alignItems="center">
                <Card sx={{margin:"20px", position:"absolute", top:"25%", width:"calc(100% - 20px)", maxWidth:"400px"}}>
                    <CardContent>
                        <Typography color="info" sx={{mb:"50px", textAlign:"center", fontSize:"26px", color:"#4285f4"}}>
                            Welcome!
                        </Typography>
                        <Stack direction="column">
                            <Stack direction="row" sx={{margin:"10px 0px 10px 0px"}}>
                                <TextField 
                                    fullWidth 
                                    size="small" 
                                    id="userId" 
                                    label="User ID" 
                                    onChange={(e) => setUserId(e.target.value)}
                                    value={userId}
                                />
                            </Stack>
                            <Stack direction="row" sx={{margin:"10px 0px 10px 0px"}}>
                                <TextField 
                                    fullWidth 
                                    size="small" 
                                    id="password" 
                                    label="Password" 
                                    onChange={(e) => {password = e.target.value}} 
                                    type="password" 
                                />
                            </Stack>
                            <FormControlLabel 
                                control={
                                    <Switch 
                                        size="small"
                                        onChange={handleCheckbox}
                                        checked={isChecked}
                                        name="Save ID"
                                    />
                                }
                                label="Save ID"
                                sx={{margin:"0px auto 0px auto"}}
                            />
                        </Stack>
                        <Typography sx={{mt:"25px", color:"#FF0000", textAlign:"center"}}>{authStt}</Typography>
                        <Button sx={{mt:"30px"}} variant="contained" fullWidth onClick={handleClick} startIcon={<LogInIcon/>}>Login</Button>
                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}