// components/workforce/mpTable/index.js
import { Card, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow,
    Typography, IconButton, CircularProgress, Stack
   } from '@mui/material'
import { makeStyles } from '@mui/styles'
import InfoIcon from '@mui/icons-material/Info'
import PhoneIcon from '@mui/icons-material/Phone'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { useState, useEffect, useContext } from 'react'
import { format } from 'date-fns'
import { WorkforceContext } from "../workforceContextProvider"
import DetailEmp from '../detailEmp'
import LoadingScreen from '../../loadingScreen'

const useStyles = makeStyles(theme => ({
    wrapIcon: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        color:"#555555"
    },
    headerCell: {
        backgroundColor:"#fdfdfd",
        color:"#1976d2",
        fontSize:"16px"
    }
}))

export default function MpTable() {
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadDetail, setIsLoadDetail] = useState(false)
    const [mpJson, setMpJson] = useState([])
    const [detailEmpData, setDetailEmpData] = useState(null)
    const [globalState, setGlobalState] = useContext(WorkforceContext)
    useEffect(() => {
        if (isLoading) {
            fetch('/api/rbemp/search', {
                method: "GET"
            })
            .then((htmlRes) => htmlRes.json())
            .then((data) => {
                console.log(data)
                setGlobalState(globalState => {
                    return {...globalState, tableData: data}
                })
                setIsLoading(false)    
            })
        }
    }, [])
    const showDetailEmp = (gen) => {
        setIsLoadDetail(true)
        fetch('/api/rbemp/searchOne', {
            method: "POST",
            body: JSON.stringify({gen: gen})
        })
        .then((htmlRes) => htmlRes.json())
        .then(data => {
            setDetailEmpData(data)
            setIsLoadDetail(false)
        })
    }
    if (isLoading) return <Stack direction="row" alignItems="center" justifyContent="center"><CircularProgress size="16px"/> Đang tải dữ liệu...</Stack>
    return (
        <Card sx={{margin:"20px", overflow:"auto"}}>
            <DetailEmp empData={detailEmpData} />
            <LoadingScreen loading={isLoadDetail}/>
            <TableContainer sx={{maxHeight:"68vh", minWidth:"850px"}}>
                <Table stickyHeader aria-label="manpower-list-table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headerCell} align="left">Info</TableCell>
                            <TableCell className={classes.headerCell} align="left">Employee</TableCell>
                            <TableCell className={classes.headerCell} align="left">Position</TableCell>
                            <TableCell className={classes.headerCell} align="left">Job</TableCell>
                            <TableCell className={classes.headerCell} align="left">Personal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {globalState.tableData.map((emp) => (
                        <TableRow
                        key={emp.gen}
                        >
                        <TableCell sx={{maxWidth:"20px"}}>
                            <IconButton color="primary" size="inherit" onClick={() => {showDetailEmp(emp.gen)}}>
                                <InfoIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell sx={{minWidth:"150px"}}>
                            <Typography variant="button" color="primary">{emp.name}</Typography>
                            <Typography className={classes.wrapIcon} variant="body2"><Grid3x3Icon fontSize="inherit"/>&nbsp;{emp.gen}</Typography>
                            <Typography className={classes.wrapIcon} variant="body2"><AlternateEmailOutlinedIcon fontSize="inherit"/>&nbsp;{emp.knoxID}</Typography>
                            <Typography className={classes.wrapIcon} variant="body2"><PhoneIcon fontSize="inherit"/>&nbsp;{emp.phone}</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="button">{emp.dept}</Typography>
                            <Typography variant="body1">{emp.title}</Typography>
                            <Typography variant="body1">{emp.duty}</Typography>
                            <Typography 
                            variant="overline"
                            sx={{
                                borderRadius:"5px", 
                                padding:"3px",
                                backgroundColor: emp.status=='Active'?"#4caf50":
                                emp.status=='On Leave'?"#03a9f4":
                                emp.status=='Terminated'?"#ef5350":"#ff9800",
                                color:"#ffffff",
                                fontSize:"9px"
                            }}
                            >
                            {emp.status}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="button">{emp.jobGroup}</Typography>
                            <Typography variant="body2">{emp.job}</Typography>
                            <Typography variant="body2">{emp.jobDesc}</Typography>
                        </TableCell>
                        <TableCell sx={{maxWidth:"330px"}}>
                            <Typography className={classes.wrapIcon} variant="button"><CakeOutlinedIcon color="warning" fontSize="inherit"/>&nbsp;{format(new Date(emp.dob), 'dd-MM-yyyy')}</Typography>
                            <Typography variant="body2">{emp.gender}</Typography>
                            <Typography className={classes.wrapIcon }variant="body2"><LocationOnOutlinedIcon fontSize="inherit"/>&nbsp;{emp.temporaryAddress}</Typography>
                            <Typography className={classes.wrapIcon} variant="body2"><HomeOutlinedIcon fontSize="inherit"/>&nbsp;{emp.regularAddress}</Typography>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}