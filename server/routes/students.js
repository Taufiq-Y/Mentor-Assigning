import express from "express";
import { Students } from "../models/student.js"
const router = express.Router();
router
.route('/students')
// to get all students
  .get( async (request, response) => {
    try {
      const studentsList = await Students.find();
      response.send(studentsList);
      console.log(studentsList);
    } catch (err) {
      response.send(err);
      console.log(err);
    }
  })
  // to create new student
  .post( async (request, respone) => {
    const addStdnt = request.body;
    console.log(addStdnt);
  
    // const user = new Users({
    //   id: addUser.id,
    //   avatar: addUser.avatar,
    //   createdAt: addUser.createdAt,
    //   name: addUser.name,
    // });
  
    const student = new Students(addStdnt);
  
    try {
      const newStudent = await student.save();
      respone.send({newStudent, message:"Created and Added successfully"});
    } catch (err) {
      respone.status(500);
      respone.send(err);
      console.log(err);
    }
  });
 
router
  .route('/students/:name')
   // to get students by Id
   .get( async (request, response) => {
    const {name}=request.params;
    // console.log(id);
    try {
      // const student = await Students.find({name:name});
      const student = await Students.findOne({name:name});
      response.send(student);
      console.log(student);
    } catch (err) {
      response.send(err);
      console.log(err);
    }
  })
 
  // to delete student by Id
  .delete(async(request,response)=>{
    const {id}=request.params;
    console.log("id of student to be removed",id);
   
    try{
      const student=await Students.findById({_id:id});
      console.log("student to be removed",student)
      await student.remove();
      response.send({student,message:'deleted successfully!'})
    }
    catch(err){
      response.send(err);
      console.log(err);
    }
  })
  // to assign the mentor to student tested 100%
  router.route("/students/assign-mentor")
  .post(async (request,response)=>{
    // const {id}=request.params;
    const {id,mentorId}=request.body;
    try{
       const student=await Students.findById({_id:id});
       if(student){
         student.mentorId=mentorId;
       }
       await student.save();
       response.send({student,message:"Assigned Mentor Successfully"});
    }catch(err){
     response.send(err);
     console.log(err);
    }
  })
  // tested change-mentor 100%
  router.route("/students/change-mentor")
  .patch(async (request,response)=>{
    const {id,mentorId}=request.body;
    //  const {
    //   //  name,email,
    //    mentorId}=request.body;
    // console.log(id);
    try {
      // const student = await Students.find({name:name});
      const student = await Students.findById({_id:id});
    // if(name){
    //   student.name=name;
    // }
    // if(email){
    //   student.email=email;
    // }
    if(mentorId){
        student.mentorId=mentorId;
      }
    await student.save();
      response.send({student,message:"Changed mentor successfully"});
      console.log(student);
    } catch (err) {
      response.send(err);
      console.log(err);
    }
  
  })
  // app.use('/students',studentRouter);
  // tested find-by-mentor 100%
  router.route("/students/find-by-mentor/")
  .post(async(request,response)=>{
    const {mentorId}=request.body;

    try{
    
       const students=await Students.find({mentorId:mentorId})
       if(students){
         response.send(students);
       }
       else{
         response.send('No students assigned for this mentor')
       }
      //  else if(students.length===0){
      //   //  response.send("No students are assigned for this mentorId"+mentorId)
      //  return  response.status(401).json("Students Not Found");
      //  }
      
       console.log(students);
    }catch(err){
     console.log(err);
     response.send("No students assigned for this mentor");
    }
  })
 
export const studentRouter=router;