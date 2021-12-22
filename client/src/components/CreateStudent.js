import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { TextField,Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function CreateStudent({getMentors}) {
    const history=useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [surname,setSurname]=useState('');
    const[password,setPassword]=useState('');
    const [mentorId,setMentorID]=useState('');
    const handleSubmit=async ()=>{
        const newStudent={
            name:name,
            surname:surname,
            email:email,
            password:password,
            mentorId:mentorId
        }
          // function to add new student to API through POST method
         fetch("https://student-mentor-assign-server.herokuapp.com/students",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:
                JSON.stringify(newStudent)
            
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
    }
    return (
       
        <div className="add-mentors">
            
          
         <p>  <ArrowBackIcon className="addForm"   onClick={()=>history.goBack()}/></p>
     <p> <TextField className="addForm" onInput={(e)=>setName(e.target.value)}id="outlined-basic" label="Enter Name" variant="outlined" /></p>
    <p>  <TextField className="addForm"onInput={(e)=>setSurname(e.target.value)}id="outlined-basic" label="Enter surName" variant="outlined" /></p>
     <p> <TextField className="addForm" onInput={(e)=>setEmail(e.target.value)}id="outlined-basic" label="Enter Email" variant="outlined" /></p>
     <p> <TextField className="addForm"onInput={(e)=>setPassword(e.target.value)}id="outlined-basic" label="Enter Password" variant="outlined" /></p>
     <p> <TextField className="addForm"  onInput={(e)=>setMentorID(e.target.value)}id="outlined-basic" label="Enter Mentor-Id" variant="outlined" /></p>
    <p>  <Button className="addForm" variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button></p>
        </div>
    )
}
