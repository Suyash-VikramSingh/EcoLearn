import express from "express";
import multer from "multer";
import {
  submitTask,
  getMySubmissions,
} from "../controllers/submission.controller.js";
import { auth } from "../middleware/auth.js";
const upload = multer({ dest: "uploads/" });

const routerS = express.Router();
routerS.post("/:id", auth, upload.single("image"), submitTask);
routerS.get("/mine", auth, getMySubmissions);
export default routerS;
