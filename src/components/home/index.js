// ■---- home\index.js
import { Grid, Card, Typography, CardContent, CardMedia, CardActions, Button, Divider } from "@mui/material"
import CustomAppBar from "../customAppBar"
import CustomHead from "../customHead"
import { getUserSession } from "../userSession"

export default function Home({pageName="Home"}) {
    let userSession = getUserSession()
    let userName = userSession? userSession.name : 'Guest'
    return (
        <>
            <CustomHead title={pageName} />
            <CustomAppBar pageName={pageName} />
            <Typography color="info" sx={{margin:"20px auto 20px auto", textAlign:"center", fontSize:"26px", color:"#4285f4"}}>
                    Welcome! {userName}
                </Typography>
            <Grid container justifyContent="center" alignItems="center">
                <Card sx={{width:345, height:330, margin:"20px"}}>
                    <CardMedia
                        component="img"
                        alt="workforce"
                        height="145"
                        image="/res/workforceMagt.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Workforce Management
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        QUẢN LÝ NHÂN LỰC<br/>
                        Thông tin nhân viên<br/>
                        Trạng thái nhân lực<br/>
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button href='/workforce' size="ms" variant="text">TIẾP TỤC </Button>
                    </CardActions>
                </Card>
                <Card sx={{width:345, height:330, margin:"20px"}}>
                    <CardMedia
                        component="img"
                        alt="emp service"
                        height="145"
                        image="/res/empService.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Employee Service Center
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        TRUNG TÂM HỖ TRỢ NHÂN VIÊN<br/>
                        Xử lý thủ tục chính sách cho người lao động<br/>
                        Tiếp nhận góp ý, chia sẻ cởi mở
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button href='/hrService' size="ms" variant="text">TIẾP TỤC </Button>
                    </CardActions>
                </Card>
                <Card sx={{width:345, height:330, margin:"20px"}}>
                    <CardMedia
                        component="img"
                        alt="exam system"
                        height="145"
                        image="/res/exam.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Examination
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        HỆ THỐNG KIỂM TRA TRẮC NGHIỆM<br/>
                        Thi kiểm tra lý thuyết MSO<br/>
                        Mini games<br/>
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button href='/exam' size="ms" variant="text">TIẾP TỤC</Button>
                    </CardActions>
                </Card>
                <Card sx={{width:345, height:330, margin:"20px"}}>
                    <CardMedia
                        component="img"
                        alt="master data"
                        height="145"
                        image="/res/masterData.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Master Data Management
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        QUẢN LÝ DỮ LIỆU MASTER<br/>
                        Upload, backup dữ liệu<br/>
                        Data analytics<br/>
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button href='/masterData' size="ms" variant="text">TIẾP TỤC</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}