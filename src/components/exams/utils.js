// ■---- exams\utils.js
// lưu dữ liệu bài thi hiện tại, mặc định chưa chọn câu nào
export const resultData = []
export function initResultData(bank) {
    bank.map((quest, index) => {
        let resultItem = {
            id: quest.id,
            select: 0,
            score: 0
        }
        resultData[index] = resultItem
        return resultItem
})
}
export const secTohhmmss = (sec) => {
    let hh = Math.floor(sec / 3600)
    let mm = Math.floor((sec - (hh * 3600)) / 60)
    let ss = sec - (hh * 3600) - (mm * 60)
    return `${(hh>9)?hh:'0'+hh}:${(mm>9)?mm:'0'+mm}:${(ss>9)?ss:'0'+ss}`
}

export function examScoring(data) {
    let selectTotal = 0
    let scoreTotal = 0
    let questTotal = data.length
    let correctTotal = 0
    data.map((quest) => {
        if (quest.select != 0) {
            selectTotal+=1
        }
        scoreTotal+=quest.score
        if (quest.score != 0) {
            correctTotal+=1
        }
    })
    return {
        total: questTotal,
        select: selectTotal,
        score: scoreTotal,
        correct: correctTotal,
    }
}

// API lưu kết quả bài thi vào db
const saveExamResultToDb = async (username, userId, testTitle) => {
    const examResult = {
      gen: userId,
      name: username,
      testTitle: testTitle,
      result: resultData
    }
    const htmlRes = await fetch('/api/exam/submitResult', {
        method: 'POST',
        body: JSON.stringify(examResult)
    })
    //khi dùng fetch, response trả về là 1 HTTP Response, cần dùng method .json() để lấy được json từ body của nó
    const data = await htmlRes.json()
    console.log('response from server...')
    console.log(data)
    return data
}
// API lưu kết quả bài thi vào db

export function submitExam(username, userId, testTitle, globalState, setGlobalState, timeup) {
    let finalScore = examScoring(resultData)
    let confimation
    if (!timeup) {
        confimation = confirm(`Đã làm: ${finalScore.select}/${finalScore.total} câu\nBạn có muốn nộp bài?`)
    }
    if (confimation || timeup) {
        alert(`Đã làm: ${finalScore.select}/${finalScore.total} câu\nĐúng ${finalScore.correct}/${finalScore.select} câu\nTổng điểm: ${finalScore.score}`)
        setGlobalState((globalState) => ({...globalState, showResult: true}))
        saveExamResultToDb(username, userId, testTitle).then((data) => {
          alert(`Đã lưu kết quả bài thi`)
        })
    }
}