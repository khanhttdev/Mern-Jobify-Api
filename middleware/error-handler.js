import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
	const defaultErr = {
		statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
		message: "Something went wrong , Please try again later",
	};
	res.status(defaultErr.statusCode).json({ msg: err });
};

export default errorHandlerMiddleware;
