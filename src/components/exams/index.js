import { AppBar, Stack, Typography, Toolbar, IconButton, Box } from "@mui/material"
import { EmpInfo, PassScore, TestBank, TestTime, jsonTestBank, TestTitle, AnNinhBank, HRBank, EHSBank, IEBank } from "./testbank"
import ExamContextProvider, { ExamContext }  from './examContextProvider'
import MenuIcon from "@mui/icons-material/Menu"
import QuestionTemp from "./questionTemp"
import Timer from "./timer"
import SubmitBtn from "./submit"
import ResultNotice from "./resultNotice"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function Exams() {
    return (
        <ExamContextProvider>
            <Stack direction="column" justifyContent="center" alignItems="center">
                <AppBar position="sticky" elevation={1}>
                    <Toolbar>
                        <IconButton
                            size='medium'
                            edge='start'
                            color='inherit'
                            aria-label="menu"
                            sx={{mr:2}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow:1}}>
                            MSO Examining
                        </Typography>
                        <SubmitBtn />
                    </Toolbar>
                </AppBar>
                <Stack direction="row" justifyContent="center" sx={{margin:"15px 0px 15px 0px"}}>
                    <Typography color="info" sx={{fontWeight:"bold", textAlign:"center", fontSize:"36px"}}>
                        Bài thi: {TestTitle.toUpperCase()}
                    </Typography>
                </Stack>
                <Timer time={TestTime} alertTime={Math.floor(TestTime/10)}/>
                <ResultNotice name={EmpInfo.name} gen={EmpInfo.gen} passScore={PassScore} />
                <Box justifyContent="center" alignItems="center" sx={{maxWidth:"750px"}}>
                    {EHSBank.map((quest, no) => {
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
        </ExamContextProvider>
    )
}