import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/layout/navbar'
import { ButtonEx } from '../mui_samples'
import Exams from '../components/exams'
import {Container} from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next with MSO Exam</title>
        <meta name="by Thaokm" content="Exam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Exams />
    </>
  )
}
