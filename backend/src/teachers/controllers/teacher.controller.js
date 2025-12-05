import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Teacher.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Teacher already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const teacher = await Teacher.create({ name, email, password: hashed });

    res.json({ msg: "Teacher registered", teacher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });

    if (!teacher) return res.status(400).json({ msg: "Invalid credentials" });

    const match = await bcrypt.compare(password, teacher.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: teacher._id, role: "teacher" },
      process.env.JWT_SECRET
    );

    res.json({ token, teacher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
