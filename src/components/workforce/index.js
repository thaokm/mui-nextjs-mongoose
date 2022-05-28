// components/workforce/index.js
import MpTable from "./mpTable"
import EmpSearch from "./search"
import CustomAppBar from "../customAppBar"
import CustomHead from "../customHead"
import { Stack, Typography } from '@mui/material'
import WorkforceContextProvider from "./workforceContextProvider"

export default function Workforce({pageName="Workforce management"}) {
    return(
        <WorkforceContextProvider>
            <CustomHead title={pageName} />
            <CustomAppBar pageName={pageName}/>
            <Stack direction="column" justifyContent="center">
            <EmpSearch />
            <MpTable />
            <Typography variant="overline" align="center">
                copyright © 2022 RB Team
            </Typography>
            </Stack>
        </WorkforceContextProvider>
    )
}