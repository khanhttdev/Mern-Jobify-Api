import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
mongoose.set("strictQuery", true);
dotenv.config();
app.use(cors());
app.use(express.json());

//* middleware
// app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//* Router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

//* Connect-Mongodb
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to mongoDB.");
	} catch (error) {
		throw error;
	}
};

app.listen(port, () => {
	connect();
	console.log("Connected to backend.");
});
