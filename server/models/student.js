import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mentorId:{
    type:String,
  }
//   resetToken: String,
//   expireTime: Date,
});

export const Students = mongoose.model("student", studentSchema);