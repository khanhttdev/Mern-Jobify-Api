import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
