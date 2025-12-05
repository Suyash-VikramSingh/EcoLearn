import express from "express";
import {
  registerTeacher,
  loginTeacher,
} from "../controllers/teacher.controller.js";

const routerT = express.Router();
routerT.post("/register", registerTeacher);
routerT.post("/login", loginTeacher);
export default routerT;
