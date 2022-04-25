import { useContext } from "react"
import { ExamContext } from "../examContextProvider"
import { Stack, Button } from "@mui/material"

export default function SubmitBtn() {
    const [globalState, setGlobalState] = useContext(ExamContext)
    const handleSubmit = () => {
        let selectTotal = 0
        let scoreTotal = 0
        let questTotal = globalState.data.length
        let correctTotal = 0
        let wrongTotal = questTotal
        globalState.data.map((quest) => {
            if (quest.select != 0) {
                selectTotal+=1
            }
            scoreTotal+=quest.score
            if (quest.score != 0) {
                correctTotal+=1
            }
        })
        wrongTotal = questTotal - correctTotal
        alert(`đã làm: ${selectTotal}/${questTotal} câu, đúng ${correctTotal}/${questTotal} tổng điểm: ${scoreTotal}`)
        setGlobalState((globalState) => ({...globalState, showResult: true}))
        console.log(globalState)
    }
    return(
        <Stack direction="row" justifyContent="center">
            <Button disabled={globalState.showResult} variant="contained" size="lg" onClick={handleSubmit}>
                Nộp bài
            </Button>
        </Stack>

    )
}