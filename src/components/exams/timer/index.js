import { Card, Stack, Typography } from "@mui/material"
import { useState, useEffect, useContext } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import { ExamContext } from "../examContextProvider";

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
          console.log('Hết thời gian')
        }
        return () => clearInterval(interval)
      }, [seconds])
          
    const secTohhmmss = (sec) => {
        let hh = Math.floor(sec / 3600)
        let mm = Math.floor((sec - (hh * 3600)) / 60)
        let ss = sec - (hh * 3600) - (mm * 60)
        return `${(hh>9)?hh:'0'+hh}:${(mm>9)?mm:'0'+mm}:${(ss>9)?ss:'0'+ss}`
    }

    return(
        <Card sx={{
          position:"fixed",
          bottom:"30px",
          right:"30px",
          padding:"10px",
          opacity:0.8,
          background: alertTime?seconds<alertTime?"#ea4435":"#33a853":seconds<30?"#ea4435":"#33a853"
        }}
        >
            <Stack direction="row" justifyContent="center" alignContent="center">
                <AccessAlarmIcon />
                <Typography>{seconds>0? secTohhmmss(seconds): 'Hết giờ'}</Typography>
            </Stack>
        </Card>
    )
}