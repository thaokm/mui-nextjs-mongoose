import * as React from 'react'
import { Button } from '@mui/material/'
import { testBankList } from "../components/exams/testbank"

const postTestBankAPI = async () => {
  console.log(testBankList[3])
  const data = await fetch('/api/exam/testbank', {
      method: 'POST',
      body: JSON.stringify(testBankList[3])
  })
  const jsonFeedback = await data.json()
  return jsonFeedback
}

export default function SwitchesGroup() {
  const [state, setState] = React.useState();
  const handleClick = () => {
    postTestBankAPI().then((data) => {
      console.log('server feedback...')
      console.log(data)
    })
  }

  return (
    <Button onClick={handleClick}>
      Upload Testbank
    </Button>
  )
}