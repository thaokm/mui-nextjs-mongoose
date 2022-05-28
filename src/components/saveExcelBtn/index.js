// components/saveExcelBtn/index.js
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import { Workbook } from 'exceljs'
import FileSaver from 'file-saver'

export default function SaveExcelBtn({filename="report", title="exported data", data}) {
    const [isLoading, setIsLoading] = useState(false)
    const handleClick = () => {
        setIsLoading(true)
        // console.log(data)
        if (data.length > 0) {
            let header = Object.keys(data[0])
            console.log(header)
            let content = data.map(element => {
                let row = []
                header.forEach(key => {
                    row.push(element[key])
                })
                return row
            })
            console.log(content)
            let workbook = new Workbook()
            let worksheet = workbook.addWorksheet(filename)
            let titleRow = worksheet.addRow([title])
            let headerRow = worksheet.addRow(header)
            headerRow.eachCell((cell, number) => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFFF00' },
                    bgColor: { argb: 'FF0000FF' }
                }
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
            })
            content.forEach(d => {
                let row = worksheet.addRow(d)
            })
            workbook.xlsx.writeBuffer().then((binary) => {
                let blob = new Blob([binary], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                FileSaver.saveAs(blob, filename + '.xlsx');
            })            
        } else {
            alert(`nothing to download`)
        }
        setIsLoading(false)
    }
    return(
        <LoadingButton 
            loading={isLoading}
            onClick={handleClick}
            variant='contained'
            color='success'
        >
            Excel
        </LoadingButton>
    )
}