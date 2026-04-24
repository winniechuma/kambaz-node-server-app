import QuizzesDao from "./dao.js";
import * as attemptDao from "./attemptDao.js";

export default function QuizRoutes(app, db) {
  const dao = QuizzesDao();
  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.send(quizzes);
  }

  const findQuizzesForCourse = async (req, res) => {
    let {courseId} = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  const createQuiz = async (req, res) => {
    const {courseId} = req.params;
    const newQuiz = await dao.createQuiz({ ...req.body, course: courseId });
    res.json(newQuiz);
  };

  const deleteQuiz = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.send(status);
  }
   const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  }

  const saveAttempt = async (req, res) => {
    const { quizId } = req.params;
    const userId = req.session?.currentUser?._id;
    const { answers, score } = req.body;
    const attempt = await attemptDao.saveAttempt({ quizId, userId, answers, score });
    res.json(attempt);
    };

    const getAttempts = async (req, res) => {
    const { quizId } = req.params;
    const userId = req.session?.currentUser?._id;
    const attempts = await attemptDao.findAttemptsForUserAndQuiz(userId, quizId);
    res.json(attempts);
    };

    const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
    };

  app.get("/api/quizzes/:quizId", findQuizById);
  app.post("/api/quizzes/:quizId/attempts", saveAttempt);
  app.get("/api/quizzes/:quizId/attempts", getAttempts);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
}
