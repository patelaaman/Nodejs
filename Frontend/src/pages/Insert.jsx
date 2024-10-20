import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Insert=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)

     }

        
     const handelSubmit=(e)=>{
         e.preventDefault();
         let  api = "http://localhost:8003/student/stuSave"
         axios.post(api,input).then((res)=>{
            console.log(res);
            alert("data Save Succesfully")
         }).catch(error=>{
            console.log("there was an error !",error)
         })
     }
     
    return(
        <>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="rollno"onChange={handleInput} value={input.rollno} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} value={input.name} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city"onChange={handleInput} value={input.city} placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter class</Form.Label>
        <Form.Control type="text" name="clas" onChange={handleInput} value={input.clas} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handelSubmit} type="submit">
        Submit
      </Button>
    </Form>
        
     </>
    )
}
export default Insert;