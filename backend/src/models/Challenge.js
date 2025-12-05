import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  points: Number,
  category: String,
  steps: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Challenge", ChallengeSchema);
