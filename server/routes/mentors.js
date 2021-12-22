import express from "express";
import { Mentors } from "../models/mentor.js";
const router = express.Router();
router
.route('/mentors')
// to get all mentors
  .get( async (request, response) => {
    try {
      const mentorsList = await Mentors.find();
      response.send(mentorsList);
      console.log(mentorsList);
    } catch (err) {
      response.send(err);
      console.log(err);
    }
  })
  // to add create mentors
  .post( async (request, respone) => {
    const addMentor = request.body;
    console.log(addMentor);
  
    const mentor = new Mentors(addMentor);
  
    try {
      const newMentor = await mentor.save();
      respone.send({newMentor, message:" Created and Added successfully"});
    } catch (err) {
      respone.status(500);
      respone.send(err);
      console.log(err);
    }
  });
 
// router
//   .route('/mentors/:id')
//    // to get students by Id
//    .get( async (request, response) => {
//     const {name}=request.params;
//     console.log(name);
//     try {
//       // const student = await Students.find({name:name});
//       const mentor = await Mentors.find({name:RegExp(name,"i")});
//       response.send(mentor);
//       console.log(mentor);
//       if(!mentor) response.send(`cannot have mentor of the name ${name}`);
//     } catch (err) {
//       response.send(err);
//       console.log(err);
//     }
//   })
//   // to delete mentors by Id
//   .delete(async(request,response)=>{
//     const {name}=request.params;
//     console.log("id of student to be removed",name);
   
//     try{
//       const mentor = await Mentors.findOne({name:RegExp(name,"i")});
//       console.log("student to be removed",mentor)
//       await mentor.remove();
//       response.send({mentor,message:'deleted successfully!'})
//     }
//     catch(err){
//       response.send(err);
//       console.log(err);
//     }
//   })
  // .patch(async (request,response)=>{
  //   const {id}=request.params;
  //    const {name,email,mentorId}=request.body;
  //   // console.log(id);
  //   try {
  //     // const student = await Students.find({name:name});
  //     const findmentor = await Mentors.findById({_id:id});
  //   if(name){
  //     findmentor.name=name;
  //   }
  //   if(email){
  //     findmentor.email=email;
  //   }
  //   if(mentorId){
  //       findmentor.mentorId=mentorId;
  //     }
  //   await findmentor.save();
  //     response.send({findmentor,message:"Updated successfully"});
  //     console.log(mentor);
  //   } catch (err) {
  //     response.send(err);
  //     console.log(err);
  //   }
  
  // })
  // app.use('/mentors',mentorRouter);
  
export const mentorRouter = router;