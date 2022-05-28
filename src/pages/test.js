import DetailEmp from '../components/workforce/detailEmp'
import { useState, useEffect } from 'react'

export default function Test() {
    const [isLoading, setIsLoading] = useState(true)
    const [employeeData, setEmployeeData] = useState({})
    useEffect(() => {
        fetch('/api/rbemp/searchOne', {
            method: "POST",
            body: JSON.stringify({gen: "16787438"})
        })
        .then((htmlRes) => htmlRes.json())
        .then((data) => {
            setEmployeeData(data)
            setIsLoading(false) 
        })
    }, [])
    if (isLoading) return <p> Loading... </p>
    return(
        <DetailEmp empData={employeeData}/>
    )
}