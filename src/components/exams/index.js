// ■---- exams\index.js
import { Stack, Typography, Box, Autocomplete, TextField, CircularProgress } from "@mui/material"
import { testBankList } from "./testbank"
import ExamContextProvider  from './examContextProvider'
import QuestionTemp from "./questionTemp"
import Timer from "./timer"
import CustomAppBar from "../customAppBar"
import SubmitBtn from "./submit"
import ResultNotice from "./resultNotice"
import CustomHead from "../customHead"
import { useEffect, useState } from "react"
import { initResultData, resultData } from "./utils"

// API get TestBank data
const getTestbankListAPI = async () => {
    const htmlRes = await fetch('/api/exam/testbank', {
        method: 'GET'
    })
    const data = await htmlRes.json()
    return data
}

let testList
export default function Exams({pageName="Examination System", userName, userId}) {
    let initBank = {
        testTitle: '',
        testTime: 90,
        passScore: 0,
        testData: []
    } // Đối tượng gồm testData, testTitle, passScore, testTime
    const [bank, setBank] = useState(initBank)
    const [testData, setTestData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    //render các giá trị khởi tạo cho bài thi gồm Đề thi (testData) và kết quả thi (resultData)
    useEffect(() => {
        // testList = [...testBankList]
        // initResultData(bank.testData)
        // setTestData([...bank.testData])
        getTestbankListAPI().then((data) => {
            console.log(data)
            testList = [...data]
            // initResultData(bank.testData)
            // setTestData([...bank.testData])
            setIsLoading(false)
        })
    }, [bank.testTitle])
    // lựa chọn bài thi từ ngân hàng thi, render lại trang khi nhận được option
    const comboBoxChange = (option) => {
        setBank(testList[option.id])
        initResultData(testList[option.id].testData)
        setTestData([...testList[option.id].testData])
    }
    if (isLoading) return <Stack direction="row" alignItems="center" justifyContent="center"><CircularProgress size="16px"/> Đang tải dữ liệu...</Stack>
    return (
        <ExamContextProvider>
            {(testData.length==0)?
            <>
                <CustomHead title={pageName} />
                <CustomAppBar pageName={pageName} />
                <Stack direction="column" justifyContent="center" alignItems="center">
                    <Stack direction="row" justifyContent="center" sx={{margin:"15px 0px 15px 0px"}}>
                        <Typography color="info" sx={{fontWeight:"bold", textAlign:"center", fontSize:"26px", color:"#4285f4"}}>
                            Lựa chọn Bài thi
                        </Typography>
                    </Stack>
                    <Autocomplete
                     id='bank-select'
                     options={testList.map((test, index) => ({label:test.testTitle, id:index}))}
                     getOptionLabel={option => option.label}
                     isOptionEqualToValue={(option, value) => option.id === value.id}
                     renderInput={(param) => <TextField {...param} label="Chọn bài thi..."/>}
                     sx={{minWidth:"300px"}}
                     onChange={(e, option) => {comboBoxChange(option)}}
                    />
                </Stack>
            </>:
            <>
                <CustomHead title={pageName} />
                <CustomAppBar pageName={pageName} button={<SubmitBtn username={userName} userId={userId} testTitle={bank.testTitle}/>} />
                <Stack direction="column" justifyContent="center" alignItems="center">
                    <Stack direction="row" justifyContent="center" sx={{margin:"15px 0px 15px 0px"}}>
                        <Typography color="info" sx={{fontWeight:"bold", textAlign:"center", fontSize:"26px", color:"#4285f4"}}>
                            BÀI THI: {bank.testTitle.toUpperCase()}
                        </Typography>
                    </Stack>
                    <Timer username={userName} userId={userId} testTitle={bank.testTitle} time={bank.testTime} alertTime={Math.floor(bank.testTime/10)} />
                    <ResultNotice name={userName} gen={userId} passScore={bank.passScore} />
                    <Box justifyContent="center" alignItems="center" sx={{maxWidth:"750px"}}>
                        {testData.map((quest, no) => {
                            return(
                                <QuestionTemp
                                    key={quest.id}
                                    img={quest.img}
                                    id={quest.id}
                                    no={no + 1}
                                    q={quest.q}
                                    a={quest.a}
                                    b={quest.b}
                                    c={quest.c}
                                    d={quest.d}
                                    score={quest.score}
                                    answer={quest.answer}
                                />    
                            )
                        })}
                    </Box>
                    <Typography variant="overline" align="center">
                        copyright © 2022 ThaoKM
                    </Typography>
                </Stack>
            </>}
        </ExamContextProvider>
    )
}