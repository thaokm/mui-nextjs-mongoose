// components/workforce/mpTable/index.js
import { Card, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow,
    Typography, IconButton
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
import { WorkforceContext } from "../workforceContextProvider";

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
    const [mpJson, setMpJson] = useState([])
    const [globalState, setGlobalState] = useContext(WorkforceContext)
    useEffect(() => {
        if (isLoading) {
            const htmlRes = fetch('/api/emp/emp', {
                method: "GET"
            })
            .then((htmlRes) => htmlRes.json())
            .then((data) => {
                console.log(data)
                // setMpJson(data)
                setGlobalState(globalState => {
                    return {...globalState, tableData: data}
                })
                setIsLoading(false)
            })
        }
    },[])
    if (isLoading) return <p>Đang tải dữ liệu...</p>
    return (
        <Card sx={{margin:"20px", overflow:"auto"}}>
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
                    <IconButton color="primary" size="inherit">
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
                    <Typography variant="body2">{emp.jobType}</Typography>
                    <Typography variant="body2">{emp.jobDetail}</Typography>
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