import mongoose from "mongoose";
import attemptSchema from "./attemptSchema.js";

const AttemptModel = mongoose.model("quizAttempts", attemptSchema);

export const saveAttempt = async (attempt) => {
  return AttemptModel.create(attempt);
};

export const findAttemptsForUserAndQuiz = async (userId, quizId) => {
// when we fetch attempts, the most recent attempt comes back as data[0]
  return AttemptModel.find({ userId, quizId }).sort({ takenAt: -1 });
};