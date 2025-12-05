import Submission from "../models/Submission.js";

export const submitTask = async (req, res) => {
  try {
    const { caption } = req.body;
    const submission = await Submission.create({
      studentId: req.user.id,
      challengeId: req.params.id,
      imageUrl: req.file?.path || null,
      caption,
    });
    res.json({ msg: "Submitted", submission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMySubmissions = async (req, res) => {
  const subs = await Submission.find({ studentId: req.user.id }).populate(
    "challengeId"
  );
  res.json(subs);
};
