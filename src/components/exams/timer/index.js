import { Card, Stack, Typography } from "@mui/material"
import { useState, useEffect, useContext } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import { ExamContext } from "../examContextProvider"
import { submitExam } from "../submit"
import { secTohhmmss } from "../utils"

export default function Timer({time, alertTime}) {
    const [seconds, setSeconds] = useState(time)
    const [globalState, setGlobalState] = useContext(ExamContext)
    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
        }, 1000)
        if (seconds <= 0) {
          clearInterval(interval)
          submitExam(globalState, setGlobalState, true)
          console.log('Hết thời gian')
        }
        if (globalState.showResult) {
            clearInterval(interval)
            console.log('Đã nộp bài')
        }
        return () => clearInterval(interval)
      }, [seconds])
          
    return(
        <Card
            sx={{
                position:"fixed",
                bottom:"30px",
                right:"30px",
                padding:"10px",
                opacity:0.8,
                background: alertTime?seconds<alertTime?"#ea4435":"#33a853":seconds<30?"#ea4435":"#33a853"
            }}
        >
            <Stack 
                direction="row" 
                justifyContent="center"
                alignContent="center"
            >
                <AccessAlarmIcon />
                <Typography>{seconds>0? secTohhmmss(seconds): 'Hết giờ'}</Typography>
            </Stack>
        </Card>
    )
}