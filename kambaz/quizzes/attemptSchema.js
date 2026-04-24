import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
  quizId: String,
  userId: String,
  answers: mongoose.Schema.Types.Mixed,
  score: Number,
  takenAt: { type: Date, default: Date.now },
}, { collection: "quizAttempts" });

export default attemptSchema;