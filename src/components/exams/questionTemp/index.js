import { 
    Card, CardContent, Typography, Divider,
    FormLabel, Stack, RadioGroup,
    FormControlLabel, Radio, CardMedia
    } from "@mui/material"
import { useState, useContext } from "react"
import { ExamContext } from "../examContextProvider"

export default function QuestionTemp(props) {
    const {id, no, q, img, a, b, c, d, score, answer} = {...props}
    const [value, setValue] = useState(0)
    const [globalState, setGlobalState] = useContext(ExamContext)
    const handleRadioChange = (e) => {
        setValue(e.target.value)
        const newData = globalState.data.map((quest) => {
            if (quest.id == id) {
                return {
                    ...quest, 
                    select: e.target.value,
                    score: answer==e.target.value?score:0
                }
            } else {
                return quest
            }
        })
        setGlobalState((globalState) => ({...globalState, data: newData}))
        console.log(answer==e.target.value)
    }
    return(
        <Card sx={{margin:"20px", maxWidth:"600px"}}>
            <CardContent>
                <Typography variant="h6" sx={{marginBottom:"10px", color:"#4285f4", fontsize:"18px"}}>
                    Câu hỏi {no}: {q}
                </Typography>
                {img!=''?<CardMedia component="img" image="{img}" alt="Câu hỏi hình ảnh"></CardMedia>:''}
                <Divider sx={{marginBottom:"10px"}}/>
                <FormLabel id="{`question-${id}`}">[{score} điểm] chọn 1 phương án:</FormLabel>
                <RadioGroup aria-labelledby="{`question-${id}`}" onChange="{handleRadioChange}" disabled="{!globalState.showResult}">
                {a!=""?<FormControlLabel value="{1}" control={<Radio disabled={globalState.showResult}/>} label={`A. ${a}`} />:""}
                {b!=""?<FormControlLabel value="{2}" control={<Radio disabled={globalState.showResult}/>} label={`B. ${b}`} />:""}
                {c!=""?<FormControlLabel value="{3}" control={<Radio disabled={globalState.showResult}/>} label={`C. ${c}`} />:""}
                {d!=""?<FormControlLabel value="{4}" control={<Radio disabled={globalState.showResult}/>} label={`D. ${d}`} />:""}
                </RadioGroup>
                <Divider sx={{marginBottom:"10px"}}/>
                <Stack direction="row" justifyContent="space-between" sx={{color:"#33a853"}}>
                    <Typography>#{id}</Typography>
                    <Typography sx={{color:value!=0?"#33a853":"#ea4435"}}>
                        {value!=0?`chọn: ${value}`:`chưa chọn`}
                    </Typography>
                    {globalState.showResult?
                        <Typography sx={{color:value==answer?"#33a853":"#ea4435"}}>
                            đáp án: {answer}
                        </Typography>:''}
                    {globalState.showResult?
                        <Typography sx={{color:value==answer?"#33a853":"#ea4435"}}>
                            {value==answer?`ĐÚNG`:`SAI`}
                        </Typography>: ''
                    }
                </Stack>
            </CardContent>
       </Card>
    )
}