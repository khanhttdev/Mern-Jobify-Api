import dotenv from "dotenv";
import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(notFoundMiddleware);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
