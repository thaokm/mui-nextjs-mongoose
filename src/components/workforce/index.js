// components/workforce/index.js
import MpTable from "./mpTable"
import CustomAppBar from "../customAppBar"
import CustomHead from "../customHead"
import { Stack } from '@mui/material'

export default function Workforce({pageName="Workforce management"}) {
  return(
    <>
      <CustomHead title={pageName} />
      <CustomAppBar pageName={pageName}/>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MpTable />
      </Stack>
    </>
  )
}