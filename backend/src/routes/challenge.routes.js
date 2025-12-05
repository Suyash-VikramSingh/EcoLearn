import express from "express";
import {
  getChallenges,
  getChallengeById,
} from "../controllers/challenge.controller.js";
import { auth } from "../middleware/auth.js";

const routerC = express.Router();
routerC.get("/", auth, getChallenges);
routerC.get("/:id", auth, getChallengeById);
export default routerC;
