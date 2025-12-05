import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  imageUrl: String,
  caption: String,
  status: { type: String, default: "pending" },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Submission", SubmissionSchema);
