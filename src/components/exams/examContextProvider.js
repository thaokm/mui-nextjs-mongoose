// ■---- exams\examContextProvider.js
import { createContext, useState } from "react"

//tạo 1 mảng lưu kết quả làm bài, mặc định chỉ bao gồm trạng thái đã làm/chưa làm và điểm số
const InitState = {
    data: [],
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