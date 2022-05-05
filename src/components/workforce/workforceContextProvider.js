// workforce/workforceContextProvider.js
import { createContext, useState } from "react"

//tạo 1 mảng lưu kết quả làm bài, mặc định chỉ bao gồm trạng thái đã làm/chưa làm và điểm số
const InitState = {
    isDetailView: false,
    tableData: []
}
export const WorkforceContext = createContext([{}, () => {}])

export default function WorkforceContextProvider({children}) {
    const [globalState, setGlobalState] = useState(InitState)
    return(
        <WorkforceContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </WorkforceContext.Provider>
    )
}