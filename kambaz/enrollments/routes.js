  import EnrollmentsDao from "../enrollments/dao.js";
  
  export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao();

  const enrollUserInCourse = (req, res) => {
    const {userId, courseId} = req.params;
    const status = dao.enrollUserInCourse(userId, courseId);
    res.json(status);
  }

  const unenrollUserFromCourse = (req, res) => {
    const {userId, courseId} = req.params;
    const status = dao.unenrollUserFromCourse(userId, courseId);
    // res.send(status);
    res.json(status);
  }

    // app.delete("/api/enrollments", unenrollUserFromCourse);
    // app.post("/api/enrollments", enrollUserInCourse);
     app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse);
}

