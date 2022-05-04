// ■---- exams\questionTemp\index.js
import { 
    Card, CardContent, Typography, Divider,
    FormLabel, Stack, RadioGroup,
    FormControlLabel, Radio, CardMedia
    } from "@mui/material"
import { useState, useContext } from "react"
import { resultData } from "../utils"
import { ExamContext } from "../examContextProvider"

export default function QuestionTemp(props) {
    const {id, no, q, img, a, b, c, d, score, answer} = {...props}
    const [value, setValue] = useState(0)
    const [globalState, setGlobalState] = useContext(ExamContext)
    const handleRadioChange = (e) => {
        // render lại Trạng thái câu hỏi
        setValue(e.target.value)
        // chuyển dữ liệu đáp án được chọn & chấm điểm vào biến toàn cục resultData
        let questIndex = resultData.findIndex(quest => quest.id == id)
        resultData[questIndex].select = e.target.value
        resultData[questIndex].score = answer == e.target.value ? parseInt(score)  :0
        console.log(answer==e.target.value)
    }
    return(
        <Card sx={{margin:"10px 10px 10px 10px"}}>
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{marginBottom:"10px", color:"#4285f4", fontSize:"16px"}}
                >
                    Câu hỏi {no}: {q}
                </Typography>
                {img!='empty'?<CardMedia component="img" image={img} alt="Câu hỏi hình ảnh"></CardMedia>:''}
                <Divider sx={{marginBottom:"10px"}}/>
                <FormLabel id={`question-${id}`}>[{score} điểm] chọn 1 phương án:</FormLabel>
                <RadioGroup
                    aria-labelledby={`question-${id}`}
                    onChange={handleRadioChange}
                    disabled={!globalState.showResult}
                >
                {a!="empty"?<FormControlLabel value={1} control={<Radio disabled={globalState.showResult}/>} label={`A. ${a}`} />:""}
                {b!="empty"?<FormControlLabel value={2} control={<Radio disabled={globalState.showResult}/>} label={`B. ${b}`} />:""}
                {c!="empty"?<FormControlLabel value={3} control={<Radio disabled={globalState.showResult}/>} label={`C. ${c}`} />:""}
                {d!="empty"?<FormControlLabel value={4} control={<Radio disabled={globalState.showResult}/>} label={`D. ${d}`} />:""}
                </RadioGroup>
                <Divider sx={{marginBottom:"10px"}}/>
                <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    sx={{ color:"#33a853" }}
                >
                    <Typography>#{id}</Typography>
                    <Typography sx={{color:value!=0?"#33a853":"#ea4435"}}>
                        {value!=0?`chọn: ${value}`:`chưa chọn`}
                    </Typography>
                    {globalState.showResult?<Typography sx={{color:value==answer?"#33a853":"#ea4435"}}>đáp án: {answer}</Typography>:''}
                    {globalState.showResult?<Typography sx={{color:value==answer?"#33a853":"#ea4435"}}>{value==answer?`ĐÚNG`:`SAI`}</Typography>:''}
                </Stack>
            </CardContent>
       </Card>
    )
}