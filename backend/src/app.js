import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import challengeRoutes from "./routes/challenge.routes.js";
import submissionRoutes from "./routes/submission.routes.js";

// Teacher routes
import teacherRoutes from "./teachers/routes/teacher.routes.js";
import approvalRoutes from "./teachers/routes/approval.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Student routes
app.use("/auth", authRoutes);
app.use("/challenges", challengeRoutes);
app.use("/submissions", submissionRoutes);

// Teacher routes
app.use("/teacher", teacherRoutes);
app.use("/teacher/approvals", approvalRoutes);

export default app;
