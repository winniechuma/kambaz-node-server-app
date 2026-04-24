import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  type: String,
  title: String,
  question: String,
  points: Number,
  choices: [String],
  correctAnswer: mongoose.Schema.Types.Mixed,
  correctAnswers: [String],
}, { _id: false });

const quizSchema = new mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  description: String,
  points: Number,
  dueDate: String,
  availableFromDate: String,
  availableUntilDate: String,
  quizType: { type: String, default: "Graded Quiz" },
  assignmentGroup: { type: String, default: "Quizzes" },
  shuffleAnswers: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 },
  multipleAttempts: { type: Boolean, default: false },
  numAttempts: { type: Number, default: 1 },
  showCorrectAnswers: { type: String, default: "Immediately" },
  accessCode: { type: String, default: "" },
  oneQuestionAtATime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestions: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
  questions: [questionSchema],
}, { collection: "quizzes" });

export default quizSchema;