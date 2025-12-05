import Submission from "../../models/Submission.js";

export const getPendingSubmissions = async (req, res) => {
  const pending = await Submission.find({ status: "pending" }).populate(
    "studentId challengeId"
  );
  res.json(pending);
};

export const approveSubmission = async (req, res) => {
  await Submission.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.json({ msg: "Submission approved" });
};

export const rejectSubmission = async (req, res) => {
  await Submission.findByIdAndUpdate(req.params.id, { status: "rejected" });
  res.json({ msg: "Submission rejected" });
};
