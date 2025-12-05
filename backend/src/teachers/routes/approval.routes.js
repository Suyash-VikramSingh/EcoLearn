import express from "express";
import {
  getPendingSubmissions,
  approveSubmission,
  rejectSubmission,
} from "../controllers/approval.controller.js";
import { auth } from "../../middleware/auth.js";

const routerA = express.Router();
routerA.get("/pending", auth, getPendingSubmissions);
routerA.put("/:id/approve", auth, approveSubmission);
routerA.put("/:id/reject", auth, rejectSubmission);
export default routerA;
