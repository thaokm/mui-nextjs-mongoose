// components/workforce/mpTable/index.js
import { Card, Table, TableBody, TableCell, 
        TableContainer, TableHead, TableRow,
        Typography, Avatar, Grid, IconButton
       } from '@mui/material'
import { makeStyles } from '@mui/styles'
import InfoIcon from '@mui/icons-material/Info'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Grid3x3Icon from '@mui/icons-material/Grid3x3'
import CakeIcon from '@mui/icons-material/Cake'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeIcon from '@mui/icons-material/Home'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  headerCell: {
    backgroundColor:"#03a9f4",
    color:"#ffffff"
  }
}))

export default function MpTable() {
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(true)
  const [mpJson, setMpJson] = useState([])
  useEffect(() => {
    const htmlRes = fetch('/api/user/emp', {
      method: "GET"
    })
    .then((htmlRes) => htmlRes.json())
    .then((data) => {
      console.log(data)
      setMpJson(data)
      setIsLoading(false)
    })
  },[])
  if (isLoading) return <p>Đang tải dữ liệu...</p>
  return (
    <Card sx={{margin:"20px"}}>
    <TableContainer sx={{maxHeight:"85vh", minWidth:"850px"}}>
      <Table stickyHeader aria-label="manpower-list-table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell} align="center">Info</TableCell>
            <TableCell className={classes.headerCell} align="center">Employee</TableCell>
            <TableCell className={classes.headerCell} align="center">Position</TableCell>
            <TableCell className={classes.headerCell} align="center">Job</TableCell>
            <TableCell className={classes.headerCell} align="center">Personal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mpJson.map((emp) => (
            <TableRow
              key={emp.gen}
            >
              <TableCell>
                <IconButton color="primary" size="inherit">
                  <InfoIcon />
                </IconButton>
              </TableCell>
              <TableCell sx={{minWidth:"150px"}}>
                <Typography variant="button" sx={{color:"#1976d2"}}>{emp.name}</Typography>
                <Typography className={classes.wrapIcon} variant="body2"><Grid3x3Icon fontSize="inherit"/>&nbsp;{emp.gen}</Typography>
                <Typography className={classes.wrapIcon} variant="body2"><AlternateEmailOutlinedIcon fontSize="inherit"/>&nbsp;{emp.knoxID}</Typography>
                <Typography className={classes.wrapIcon} variant="body2"><PhoneIcon fontSize="inherit"/>&nbsp;{emp.phone}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="button">{emp.dept}</Typography>
                <Typography variant="body2">{emp.title}</Typography>
                <Typography variant="body2">{emp.duty}</Typography>
                <Typography 
                  variant="overline"
                  sx={{
                    borderRadius:"5px", 
                    padding:"3px",
                    backgroundColor: emp.status=='Active'?"#4caf50":
                      emp.status=='On leave'?"#03a9f4":
                      emp.status=='Terminated'?"#ef5350":"#ff9800",
                    color:"#ffffff",
                    fontSize:"9px"
                  }}
                >
                  {emp.status}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{emp.jobGroup}</Typography>
                <Typography variant="body2">{emp.jobType}</Typography>
                <Typography variant="caption">{emp.jobDetail}</Typography>
              </TableCell>
              <TableCell sx={{maxWidth:"330px"}}>
                <Typography className={classes.wrapIcon} variant="body2">{emp.gender} - <CakeIcon fontSize="inherit"/>&nbsp;{format(new Date(emp.dob), 'dd-MM-yyyy')}</Typography>
                <Typography variant="body2" sx={{fontSize:"13px"}}><LocationOnIcon fontSize="inherit"/>&nbsp;{emp.temporaryAddress}</Typography>
                <Typography variant="body2" sx={{fontSize:"13px"}}><HomeIcon fontSize="inherit"/>&nbsp;{emp.regularAddress}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  )
}