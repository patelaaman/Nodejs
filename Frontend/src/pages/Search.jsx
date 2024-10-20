import { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios"
import {message} from "antd";


const Search=()=>{
    const [rollno, setRoll] = useState("")
    const [mydata,setMydata] = useState([])
  
   const handleSubmit=()=>{
    let api ="http://localhost:8003/student/studatasearch";
    axios.post(api,{rollno:rollno}).then((res)=>{
        setMydata(res.data);

        if(res.data.length == 0)
            {
           message.error("No Record Found");
        }
    })
   }

   const ans=mydata.map((e)=>{
    return(
        <>
        <tr>
            <td>{e.rollno}</td>
            <td>{e.name}</td>
            <td>{e.city}</td>
            <td>{e.clas}</td>
        </tr>
        </>
    )
   })
  
    return(
        <>
        <h1>Search Employee Record </h1>
        <br></br>
        Enter Employee Number:<input type="text" value={rollno}  onChange={(e)=>{setRoll(e.target.value)}}></input>
        <button onClick={handleSubmit}>Search Here</button>
         <br></br>
        <hr></hr>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Rollno </th>
          <th>Name </th>
          <th>City</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
    
        </>
    )
}
export default Search;