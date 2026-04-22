import AssignmentsDao from "./dao.js";
export default function AssignmentRoutes(app, db) {
  const dao = AssignmentsDao();
  const findAllAssignments = async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.send(assignments);
  }

  const findAssignmentsForCourse = async (req, res) => {
    let {courseId} = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  const createAssignment = async (req, res) => {
    const {courseId} = req.params;
    const newAssignment = await dao.createAssignment({ ...req.body, course: courseId });
    res.json(newAssignment);
  };

  const deleteAssignment = async (req, res) => {
    const {assignmentId} = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  }
   const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  }

  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.post("/api/courses/:courseId/assignments", createAssignment);
  app.get("/api/assignments", findAllAssignments);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
}
