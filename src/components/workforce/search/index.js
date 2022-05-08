// components/workforce/search/index.js
import { Card, TextField, Grid, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import { LoadingButton } from "@mui/lab"
import { useState, useContext } from 'react'
import { WorkforceContext } from "../workforceContextProvider"
import SaveExcelBtn from '../../../components/saveExcelBtn'

export default function EmpSearch() {
    const initSearchConditions = {
        gen: '',
        name: '',
        gender: '',
        dept: '',
        status: 'Active',
        title: ''
    }
    const [searchConditions, setSearchConditions] = useState(initSearchConditions)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [globalState, setGlobalState] = useContext(WorkforceContext)
    const handleClick = () => {
        setLoadingBtn(true)
        const htmlRes = fetch('/api/emp/emp', {
            method: "POST",
            body: JSON.stringify(searchConditions)
        })
        .then((htmlRes) => htmlRes.json())
        .then((data) => {
            console.log(data)
            setGlobalState(globalState => {
                return {...globalState, tableData: data}
            })
            setLoadingBtn(false)
        })
    }
    return(
        <Card sx={{margin:"20px", mb:"0px", padding:"20px"}}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="gen-field" label="GEN" value={searchConditions.gen}
                        onChange={(e) => setSearchConditions({...searchConditions, gen: e.target.value})}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="name-field" label="Name" value={searchConditions.name}
                        onChange={(e) => setSearchConditions(searchConditions => ({...searchConditions, name: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="gender-field" label="Gender" value={searchConditions.gender}
                        onChange={(e) => setSearchConditions(searchConditions => ({...searchConditions, gender: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="dept-field" label="Department" value={searchConditions.dept}
                        onChange={(e) => setSearchConditions(searchConditions => ({...searchConditions, dept: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="status-field" label="Status" value={searchConditions.status}
                        onChange={(e) => setSearchConditions(searchConditions => ({...searchConditions, status: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} xl={2}>
                    <TextField 
                        fullWidth size="small" id="title-field" label="Title" value={searchConditions.title}
                        onChange={(e) => setSearchConditions(searchConditions => ({...searchConditions, title: e.target.value}))}
                    />
                </Grid>
                <Grid item>
                    <LoadingButton color="primary" loading={loadingBtn} sx={{mr:"20px"}} variant="contained" onClick={handleClick} startIcon={<SearchIcon/>}>Search</LoadingButton>
                    <SaveExcelBtn filename="list" title="Employee List" data={globalState.tableData}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{textAlign:"center", margin:"auto"}}>{globalState.tableData.length>0?`Found ${globalState.tableData.length} entri(es)`:``}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}