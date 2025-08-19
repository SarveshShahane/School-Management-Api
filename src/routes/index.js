import { Router } from "express";
import schoolRoutes from "./school.routes.js";
const router = Router();
router.use("/api", schoolRoutes);
export default router;
