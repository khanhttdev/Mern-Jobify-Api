import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		throw new BadRequestError("Please provide all values");
	}
	const userAlreadyExists = await User.findOne({ email });
	if (userAlreadyExists) {
		throw new BadRequestError("Email already exists");
	}

	const user = await User.create({ name, email, password });

	return res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res, next) => {
	res.send("login User");
};
const updateUser = async (req, res, next) => {
	res.send("update User ");
};

export { register, login, updateUser };
