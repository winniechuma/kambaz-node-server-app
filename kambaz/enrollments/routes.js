  import EnrollmentsDao from "../enrollments/dao.js";
  
  export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enrollUserInCourse = (req, res) => {
    const {userId, courseId} = req.body;
    const status = dao.enrollUserInCourse(userId, courseId);
    // res.send(status);
    res.json(status);
  }

  const unenrollUserFromCourse = (req, res) => {
    const {userId, courseId} = req.body;
    const status = dao.unenrollUserFromCourse(userId, courseId);
    // res.send(status);
    res.json(status);
  }

    app.delete("/api/enrollments", unenrollUserFromCourse);
    app.post("/api/enrollments", enrollUserInCourse);
}

