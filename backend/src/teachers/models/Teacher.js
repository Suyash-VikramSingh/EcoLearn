import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "teacher" },
});

export default mongoose.model("Teacher", TeacherSchema);
