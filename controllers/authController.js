import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

const register = async (req, res, next) => {
	const user = await User.create(req.body);
	return res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res, next) => {
	res.send("login User");
};
const updateUser = async (req, res, next) => {
	res.send("update User ");
};

export { register, login, updateUser };
