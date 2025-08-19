import { Router } from "express";
import {schoolSchema,listSchoolSchema} from "../validators/school.schema.js";
import validate from "../middlewares/validate.js";
import { addSchoolController,getSchoolsByDistance } from "../controllers/school.controller.js";

const router = Router();

router.post("/addSchool", validate(schoolSchema), addSchoolController);
router.get("/listSchools", validate(listSchoolSchema), getSchoolsByDistance);

export default router;
