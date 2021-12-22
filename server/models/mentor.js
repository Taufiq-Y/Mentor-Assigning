import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
  },
  
  mentorId:{
    type:String,
    required:true
  }
//   resetToken: String,
//   expireTime: Date,
});

export const Mentors = mongoose.model("mentor", mentorSchema);