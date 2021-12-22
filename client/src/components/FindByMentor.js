import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

export default function FindByMentor() {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [filterStudents, setFilterStudents] = useState([]);
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
  const findByMentor = async () => {
    console.log("students", students);
    if (mentorId === "") {
      alert("please select a mentor");
    } else {
      setFilterStudents(students.filter((e) => e.mentorId === mentorId));
      console.log("filterstudnts", filterStudents);
      // const finddata={

      //     mentorId:mentorId
      // }
      // console.log("data ",finddata);
      //  const res=await fetch("https://student-mentor-assign-server.herokuapp.com/students/find-by-mentor",
      //  {
      //      method:"POST",
      //      headers:{
      //          "Content-Type":"application/json",
      //      },
      //      body:JSON.stringify(finddata)
      //  })
      //  if(!(res.status===200)){
      //      alert("Failed!!")
      //  }
      // else{
      //     alert("success!")
      // }
      //  const filterdata=await res.json();

      //  console.log("filterdata",filterdata)
      //  setFilterStudents(filterdata);
      //  console.log("filterstudents",filterStudents)
    }
  };
  return (
    <div>
      <FormControl style={{ width: "300px", margin: "25px" }}>
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
      <Button id="findStudents" onClick={findByMentor} variant="outlined" color="secondary">
        Find Students
      </Button>
      {/* {filterStudents.map(e=>(
              <p>{e.name}</p>
          ))} */}
      {filterStudents.map((e) => (
        <li type="1">{e.name}</li>
      ))}
    </div>
  );
}
