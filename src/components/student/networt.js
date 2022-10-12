import { Router } from "express";
import * as Controller from "./controller";

const StudentRouter = Router();

StudentRouter.route("/").get(Controller.findAll);
StudentRouter.route("/").post(Controller.create);
StudentRouter.route("/:id").put(Controller.updateStudent);
StudentRouter.route("/:id").delete(Controller.deleteStudent);

export default StudentRouter;
