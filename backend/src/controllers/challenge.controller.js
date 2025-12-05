import Challenge from "../models/Challenge.js";

export const getChallenges = async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
};

export const getChallengeById = async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);
  res.json(challenge);
};
