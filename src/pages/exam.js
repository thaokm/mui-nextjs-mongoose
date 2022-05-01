// ■---- pages/exam.js
import Exams from '../components/exams'
import Router from 'next/router'
import { useEffect } from 'react'
import { getUserSession } from '../components/userSession'
import { useState } from 'react'

export default function Exam() {
  let userSession
  const [user, setUser] = useState({name: null, userId: null})
  useEffect(() => {
    console.log('run use effect')
    userSession = getUserSession()
    if (!userSession) {
      Router.push('/login')
    } else {
      console.log(userSession)
      setUser({name: userSession.name, userId: userSession.userId})
    }
  }, [])
  return <Exams pageName="EXAMINATION SYSTEM" userName={user.name} userId={user.userId}/>  
}