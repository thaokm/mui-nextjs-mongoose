// components/workforce/detailEmp/index.js
import { Avatar, Card, Box, Grid, Typography, Divider, IconButton, Spacer } from '@mui/material'
import { WorkforceContext } from "../workforceContextProvider"
import { format } from 'date-fns'
import style from "./DetailEmp.module.css"
import CancelIcon from '@mui/icons-material/Cancel'
import { useState, useEffect } from 'react'

export default function DetailEmp( { empData = {} } ) {
    const [isDisplay, setIsDisplay] = useState(true)
    const clickClose = () => {
        setIsDisplay(false)
    }
    useEffect(() => {
        setIsDisplay(true)
    }, [empData])
    if ((empData == null) || (!isDisplay)) return ""
    let nameArr = empData.name.split(' ')
    let avaLetter = nameArr[nameArr.length - 1].substr(0, 1)
    return (
        <Box className={style.bgModal}>
            <Box
                sx={{
                    maxWidth:"960px", height:"calc(95vh - 100px)", width:"calc(100% - 40px)", 
                    margin:"auto", mt:"80px", overflow:"auto", borderRadius:"5px"
                }}
            >
                <Card sx={{padding:"30px", mb:"10px"}}>
                    <Grid container spacing={1} direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography color="primary" variant="h5" sx={{textTransform:"uppercase", fontWeight:"bold"}}>
                                {empData.name?empData.name:"Name"}
                            </Typography>
                            <Typography color="primary" variant="body">
                                #{empData.gen?empData.gen:"GEN"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar sx={{width:"60px", height:"60px"}}>{avaLetter}</Avatar>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}> B??? ph???n:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography> {empData.dept[0]?empData.dept[0].dept:"Dept"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}> Tr???ng th??i:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography> {empData.status?empData.status[0].status:"Status"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}> Ch???c danh:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography> {empData.title?empData.title[0].title:"Title"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}> Ch???c v???:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography> {empData.duty?empData.duty[0].duty:"Duty"}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{padding:"30px", mb:"10px"}}>
                    <Grid container spacing={2} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h6"> TH??NG TIN C?? NH??N </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>KnoxID: </Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.knoxID}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ng??y sinh:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{format(new Date(empData.dob), 'dd-MM-yyyy')}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Gi???i t??nh:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.gender}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>S??? CMND:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.nationalID?empData.nationalID[0].no:"National ID"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>D??n t???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.ethnic}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>T??nh tr???ng h??n nh??n:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.maritalStatus[0].marital}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{padding:"30px", mb:"15px"}}>
                    <Grid container spacing={2} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h6"> TR??NH ????? CHUY??N M??N </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Tr??nh ?????:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.educationDegree}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Tr?????ng:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.school}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Chuy??n ng??nh:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.major}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ch???ng ch??? ti???ng Anh:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.certEng[0]?empData.certEng[0].level:"certificate English"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ch???ng ch??? ti???ng H??n:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.certKor[0]?empData.certKor[0].level:"certificate Korean"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ch???ng ch??? MSO:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.mso[0]?empData.mso[0].level:"MSO"}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{padding:"30px", mb:"10px"}}>
                    <Grid container spacing={2} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h6"> LI??N H??? </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>S??? ??i???n tho???i:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.phone[0]?empData.phone[0].phone:"phone"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Th?????ng tr??:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.regularAddress[0]?empData.regularAddress[0].addr:"addr1"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>T???m tr??:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.temporaryAddress[0]?empData.temporaryAddress[0].addr:"addr2"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Li??n h??? kh???n c???p:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.urgentContact[0]?empData.urgentContact[0].phone:"urgent"}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{padding:"30px", mb:"10px"}}>
                    <Grid container spacing={2} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h6"> C??NG VI???C </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ng??y v??o c??ng ty:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{format(new Date(empData.hireDate), 'dd-MM-yyyy')}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ng??y th??m ni??n:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{format(new Date(empData.seniorityDate), 'dd-MM-yyyy')}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Nh??m c??ng vi???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.jobGroup[0]?empData.jobGroup[0].job:"jobGroup"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>C??ng vi???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.job[0]?empData.job[0].job:"job"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>M?? t??? c??ng vi???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.jobDesc[0]?empData.jobDesc[0].job:"jobDesc"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>V??? tr?? l??m vi???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.workplace[0]?empData.workplace[0].location:"workplace"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>?????ng/Ng???i:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.standWork[0]?empData.standWork[0].isStand:"Stand/Sit"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>L???ch s??? ngh??? d??i ng??y:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.leave[0]?empData.leave[0].leaveType:"leave"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ng?????i qu???n l??:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.directManager[0]?empData.directManager[0].gen:"manager"}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{padding:"30px", mb:"10px"}}>
                    <Grid container spacing={2} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h6"> KH??C </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt:"10px", mb:"10px"}}/>
                    <Grid container spacing={1} direction="row" justifyContent="left" alignItems="center">
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>?????ng ph???c:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.uniform[0]?empData.uniform[0].size:"uniform"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>D??p t??nh ??i???n:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.sandals[0]?empData.sandals[0].size:"sandals"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>??o bra:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.bra[0]?empData.bra[0].size:"bra"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Th???t l??ng:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.belt[0]?empData.belt[0].receiveDate:"belt"}</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography sx={{fontWeight:"bold", color:"#555555"}}>Ghi ch??:</Typography>
                        </Grid>
                        <Grid item xs={6} md={3} lg={3} xl={3}>
                            <Typography>{empData.remark[0]?empData.remark[0].remark:"remark"}</Typography>
                        </Grid>
                    </Grid>
                </Card>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography sx={{textAlign:"center", color:"#555555"}}> C???p nh???t: {format(new Date(empData.updateTime), 'dd-MM-yyyy hh:mm:ss')}</Typography>
                        </Grid>
                    </Grid>
            </Box>
            <Grid container>
                <IconButton 
                    size="large" color="error" onClick={() => { clickClose() }} 
                    sx={//{position:"fixed", bottom:"10px", left:"46%"}
                        {margin:"auto"}
                    }>
                    <CancelIcon/>
                </IconButton>
            </Grid>
        </Box>
    )
}