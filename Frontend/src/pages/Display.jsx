import { useEffect, useState } from "react";
import axios from "axios"
const Display=()=>{
    const [mydata,setMydata] = useState([])
    const loaddata=async()=>{
    let api = "http://localhost:8003/student/studisplay"
    try{
        const response = await axios.get(api);
        setMydata(response.data)
        console.log(response.data)
    }catch(error){
        console.log(error)
        alert(error.response.data)
    }
 }

 useEffect(()=>{
    loaddata()
 },[])

 const ans = mydata.map((key)=>{
      return(
        <>
           <tr>
             <td>{key.rollno}</td>
             <td>{key.name}</td>
             <td>{key.city}</td>
             <td>{key.clas}</td>
           </tr>
        </>
      )
 })

    return(
        <>
   
        <h1>Display Sutdent Data </h1>
        <table>
            <tr>
                <th>Student Rollno</th>
                <th>Student name</th>
                <th>Student City</th>
                <th>Student Class</th>
            </tr>
            {ans}
        </table>
            </>
    )
}
export default Display;