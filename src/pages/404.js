// ■---- pages/404.js
import { Card, CardContent, LinearProgress, Stack } from "@mui/material"
import Link from "next/link";

export default function PageError() {
    return(
        <Stack justifyContent="center" alignItems="center" sx={{height:"100vh", width:"100vw"}}>
            <Card style={{fontSize:"25px", width:"300px", textAlign:"center"}}>
                <CardContent>
                    <p>THE PAGE IS UNDER DEVELOPMENT</p>
                    <LinearProgress />
                    <p> 
                        <Link href="/">
                            <a style={{color:"blue"}}>Click here </a>
                        </Link> to go back to home page</p>
                </CardContent>
            </Card>
        </Stack>
    )
}