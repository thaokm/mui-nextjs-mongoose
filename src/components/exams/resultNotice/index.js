// ■---- exams\resultNotice\index.js
import { Card, CardContent, Grid } from "@mui/material"
import { useContext, useState } from "react"
import { ExamContext } from "../examContextProvider"
import { resultData, examScoring } from "../utils"
import style from "./ResultNotice.module.css"

export default function ResultNotice({gen, name, passScore}) {
    const [globalState, setGlobalState] = useContext(ExamContext)
    const [modal, setModal] = useState(true)
    let finalScore = examScoring(resultData)
    const handleClick = () => {
        if (globalState.showResult) {
            setModal(modal => !modal)
            console.log(`modal: ${modal}`)
        }
    }
    return(
        <>
            <div 
                className={style.bgModal} 
                style={{ display:!globalState.showResult?"none":modal?"block":"none"}}>
            </div>
            <Card 
                sx={{margin:"10px 10px 10px 10px", width:"calc(100% - 20px)", maxWidth:"730px"}} 
                className={!globalState.showResult?"":modal?style.modal:""}
                onClick={handleClick}
            >
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={6} sx={{fontWeight:"bold"}}>GEN: {gen}</Grid>
                        <Grid item xs={6} sx={{fontWeight:"bold"}}>Name: {name}</Grid>
                        {globalState.showResult?<Grid item xs={6}>Đã làm: {finalScore.select}/{finalScore.total}</Grid>:""}
                        {globalState.showResult?<Grid item xs={6}>Đúng: {finalScore.correct}/{finalScore.select}</Grid>:""}
                        {globalState.showResult?<Grid item xs={6}>Tổng điểm: {finalScore.score}</Grid>:""}
                        {globalState.showResult?<Grid item xs={6} sx={{color:finalScore.score>=passScore?"#33a853":"#ea4435"}}>
                            Kết quả: {finalScore.correct>=passScore?"PASS":"FAIL"}
                            </Grid>:""}
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}