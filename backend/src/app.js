import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import challengeRoutes from "./routes/challenge.routes.js";
import submissionRoutes from "./routes/submission.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoutes);
app.use("/challenges", challengeRoutes);
app.use("/submissions", submissionRoutes);
export default app;
