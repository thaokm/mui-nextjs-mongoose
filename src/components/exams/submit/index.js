// ■---- exams\submit\index.js
import { useContext } from "react"
import { ExamContext } from "../examContextProvider"
import { Button } from "@mui/material"
import { submitExam } from "../utils"

// do hành động submit nếu thực hiện sẽ làm thay đổi trạng thái App : biến globalState.showResult = true
export default function SubmitBtn() {
    const [globalState, setGlobalState] = useContext(ExamContext)
    const handleSubmit = () => {
        submitExam(globalState, setGlobalState, false)
    }
    return(
        <Button color="info" disabled={globalState.showResult} variant="contained" disableElevation size="lg" onClick={handleSubmit}>
            Nộp bài
        </Button>
    )
}