import express from "express";
import {
	createJob,
	delateJob,
	getAllJobs,
	showStats,
	updateJob,
} from "../controllers/jobsController.js";

const router = express.Router();
router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").delete(delateJob).patch(updateJob);
router.route("/stats").get(showStats);

export default router;
