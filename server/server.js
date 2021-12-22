// import dotenv.config from dotenv
import cors from "cors";
import express from "express";
import DotEnv from "dotenv";
const app = express();
// const router=express.Router();
import mongoose from "mongoose";
import { studentRouter } from "./routes/students.js";
import { mentorRouter } from "./routes/mentors.js";
// import { Students } from "./models/student.js";
const PORT = process.env.PORT || 3001;

// opened connection to db

// const url = "mongodb://localhost/Students";
try {
  const url =
    "mongodb+srv://taufiq:Taufiq@2001@mentor-assign.tyqjf.mongodb.net/mentor-assign?retryWrites=true&w=majority";
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const con = mongoose.connection;
  con.on("open", () => console.log("MongoDB is connected"));
} catch (error) {
  console.log("Error");
}

// middleware
app.use(express.json());
DotEnv.config();
app.use(cors());
app.get("/", async (req, res) => {
  res.send("Welcome dude..!!");
});
app.use("/", studentRouter);
app.use("/", mentorRouter);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`server is started at ${PORT}`));

