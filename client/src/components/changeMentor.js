// working successfully hahahahahaha!!!!!!!!!!!
import React,{useState,useEffect} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import {Button} from "@material-ui/core"
export default function ChangeMentor() {
    const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  function getStudents() {
    
    fetch("https://student-mentor-assign-server.herokuapp.com/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setStudents(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getStudents();
  }, []);

  function getMentors() {
    
    fetch("https://student-mentor-assign-server.herokuapp.com/mentors", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setMentors(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getMentors();
  }, []);
  const [mentorId, setMentorId] = useState("");
  const handleMentorChange = (event) => {
    setMentorId(event.target.value);
    console.log(event.target.value);
  };
  const [studentId, setStudentId] = useState("");
  const handleStudentChange = (event) => {
    setStudentId(event.target.value);
    console.log(event.target.value);
  };
  const changeMentor=async ()=>{
      if(studentId===""){
          alert("please select a student")
      }
      else if(mentorId===""){
          alert("please select a mentor");
      }
      else{
      const data={
          id:studentId,
          mentorId:mentorId
      }
        // function to change mentor for a student in API through PATCH method
       const req=await fetch("https://student-mentor-assign-server.herokuapp.com/students/change-mentor",
       {
           method:"PATCH",
           headers:{
               "Content-type":"application/json",
           },
           body:JSON.stringify(data)
       })
       if(!(req.status===200)){
           alert("Failed to change mentor..!")
       }
       else{
           alert("mentor changed successfully!!!!")
       }
    }
  }
    return (
        <div>
              <FormControl style={{ width: "300px",margin:'25px' }}>
            <InputLabel id="demo-simple-select-label">Select Student</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={studentId}
              onChange={handleStudentChange}
            >
              {students.map((e) => (
                <MenuItem value={e._id}>{e.name}{e.surname}</MenuItem>
              ))}
            </Select>
          </FormControl>
             <FormControl style={{ width: "300px",margin:'25px' }}>
            <InputLabel id="demo-simple-select-label">Select Mentor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mentorId}
              onChange={handleMentorChange}
            >
              {mentors.map((e) => (
                <MenuItem value={e.mentorId}>{e.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button id="changeMentor" onClick={changeMentor}variant="contained" color="primary">Change Mentor</Button>
        </div>
    )
}
