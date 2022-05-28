// components/exceltojson/index.js
import { Grid, Card, Stack, Typography, Box,
        Table, TableBody, TableCell, FormControlLabel,
        TableContainer, TableHead, TableRow,
        Button, TextField, Switch} from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'
import { useState } from 'react'
import CustomAppBar from "../customAppBar"
import CustomHead from "../customHead"
import SaveExcelBtn from '../saveExcelBtn'


let jsonData //object with key
const stringToJson = (tabStr, OutputType) => {
    var jsonObj = []
    let keys = []
    let rows = tabStr.slice(0, -1).split('\n') //bo ky tu cuoi
    rows.forEach((row, index) => {
        if (index < 1) {
            keys = rows[index].split('\t') //lay hang dau tien la key cho object
        } else {
            //map chuyen ve 1 mang cac cap key:value, sau do reduce de noi lai thanh 1
            jsonObj[index - 1] = row.split('\t').map((value, rowIndex) => {
                return { [keys[rowIndex]]: value }
            }).reduce((prev, current) => {
                return { ...prev, ...current }
            })
        }
    })
    if (OutputType == true) return jsonObj //chon lay du lieu array
    return jsonObj[0]
}
const stringToTableData = (tabStr) => {
    let rows = tabStr.slice(0, -1).split('\n') //bo ky tu cuoi
    let data = rows.map(row => {
        return row.split('\t')
    })
    return data
}
export default function ExcelToJson({pageName="MASTER DATA"}) {
    const initData = [['table']]
    const [tableData, setTableData] = useState(initData)
    const [input, setInput] = useState('')
    const [apiRoute, setApiRoute] = useState('/api/emp/emp')
    const [apiMethod, setApiMethod] = useState('GET')
    const [apiRes, setApiRes] = useState('{}')
    const [jsonStr, setJsonStr] = useState('{}')
    const [isLoading, setIsLoading] = useState(false)
    const [isSwitch, setIsSwitch] = useState(true)
    
    const handleInputChange = (e) => {
        jsonData = stringToJson(e.target.value)
        setInput(e.target.value)
        setTableData(stringToTableData(e.target.value))
        console.log(jsonData)
        setJsonStr(JSON.stringify(stringToJson(e.target.value, isSwitch)))
    }
    const handleReset = () => {
        setInput('')
        setTableData(initData)
        setApiRes('{}')
        setJsonStr('{}')
    }
    const handleCallApi = async () => {
        setIsLoading(true)
        const htmlRes = await fetch(apiRoute,apiMethod=='GET'?{
            method: apiMethod
        }:{
            method: apiMethod,
            body: jsonStr
        })
        const resData = await htmlRes.json()
        console.log(resData)
        setApiRes(JSON.stringify(resData))
        setIsLoading(false)
    }
    const handleSwitch = (e) => {
        setJsonStr(JSON.stringify(stringToJson(input, e.target.checked)))
        setIsSwitch(e.target.checked)
    }
    return(
        <>
        <CustomHead title={pageName} />
        <CustomAppBar pageName={pageName} />
        <Stack direction="column" alignItems="center">
            <Card sx={{margin:"20px", padding:"20px", width:"calc(100% - 20px)", maxWidth:"850px"}}>
                <TextField
                    fullWidth size="small" id="data-field" label="Input Data Excel"
                    multiline maxRows={8} value={input} sx={{mb:"20px"}}
                    onChange={e => handleInputChange(e)}
                />
                <Stack sx={{mb:"20px"}} spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" onClick={handleReset}>Reset</Button>
                    <LoadingButton loading={isLoading} variant="contained" onClick={handleCallApi} color="success">Call API</LoadingButton>
                    <SaveExcelBtn data={JSON.parse(apiRes)}/>
                </Stack>
                
                <Stack sx={{mb:"20px"}} spacing={2} direction="row" justifyContent="center">
                    <TextField
                        fullWidth size="small" id="api-field" label="API Route"
                        value={apiRoute}
                        onChange={e => setApiRoute(e.target.value)}
                    />
                    <TextField
                        fullWidth size="small" id="method-field" label="API Method"
                        value={apiMethod}
                        onChange={e => setApiMethod(e.target.value)}
                    />
                </Stack>
                <FormControlLabel control={<Switch checked={isSwitch} onChange={handleSwitch} />} label="JSON Array" />
                <Box sx={{overflow:"auto", mb:"20px", maxHeight:"200px", padding:"10px", border:1, borderColor: 'grey.400', borderRadius: 1}}>
                    <Typography>Converted to JSON: <br /> {jsonStr}</Typography>
                </Box>
                
                <Box sx={{overflow:"auto", mb:"20px", maxHeight:"200px", padding:"10px", border:1, borderColor: 'grey.400', borderRadius: 1}}>
                    <Typography>Response from API CALL: <br />{apiRes}</Typography>
                </Box>
    
                <TableContainer sx={{maxHeight:"50vh", overflow:"auto", mb:"20px"}}>
                    <Table stickyHeader aria-label="manpower-list-table">
                        <TableHead>
                            <TableRow>
                                {tableData[0].map(item => <TableCell key={item}>{item}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, rowNo) => {
                                if (rowNo > 0) {
                                    return (
                                        <TableRow key={`row-${rowNo}`}>
                                            {row.map((col, colNo) => <TableCell key={`${rowNo}-${colNo}`}>{col}</TableCell>)}
                                        </TableRow>
                                    )
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>            
            </Card>
        </Stack>
        </>
    )
}