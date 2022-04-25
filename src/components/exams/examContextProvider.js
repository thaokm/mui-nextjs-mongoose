import { useContext, createContext, useState } from "react"
import { TestBank } from './testbank'

//tạo 1 mảng lưu kết quả làm bài, mặc định chỉ bao gồm trạng thái đã làm/chưa làm và điểm số
const InitData = TestBank.map((quest) => {
    return {
        id: quest.id,
        select: 0,
        score: 0
    }
})
const InitState = {
    data: InitData,
    showResult: false
}
export const ExamContext = createContext([{}, () => {}])
export default function ExamContextProvider({children}) {
    const [globalState, setGlobalState] = useState(InitState)
    return(
        <ExamContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </ExamContext.Provider>
    )
}