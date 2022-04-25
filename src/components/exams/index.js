import { AppBar, Button, Stack, Typography, Toolbar, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import QuestionTemp from "./questionTemp"
import Timer from "./timer";
import { TestBank, TestTime } from "./testbank"
import ExamContextProvider, { ExamContext }  from './examContextProvider'
import SubmitBtn from "./submit";

export default function Exams() {
    return (
        <ExamContextProvider>
            <Stack direction="column" alignitems="center">
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx="{{mr:2}}">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx="{{flexGrow:1}}">
                            Thi lý thuyết MSO
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Timer time={TestTime} alerttime={Math.floor(TestTime/10)}/>
                {TestBank.map((quest, no) => {
                    return(
                        <QuestionTemp 
                          key={quest.id}
                          img={quest.img}
                          id={quest.id}
                          no={no += 1}
                          q={quest.q}
                          a={quest.a}
                          b={quest.b}
                          c={quest.c}
                          d={quest.d}
                          score={quest.score}
                          answer={quest.answer} />    
                    )
                })}
                <SubmitBtn />
                <Stack direction="row" justifyContent="center">
                    <Typography variant="overline">
                        copyright (c) 2022 by ThaoKM
                    </Typography>
                </Stack>
            </Stack>
        </ExamContextProvider>
    )
}