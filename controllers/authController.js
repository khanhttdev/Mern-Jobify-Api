import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import User from "../models/User.js";

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
	const token = user.createJWT();

	res.status(StatusCodes.CREATED).json({
		user: {
			email: user.email,
			lastName: user.lastName,
			location: user.location,
			name: user.name,
		},
		token,
		location: user.location,
	});
};
const login = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError("Please provide all values");
	}
	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		throw new UnAuthenticatedError("Invalid Credentials");
	}
	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnAuthenticatedError("Invalid Credentials");
	}
	const token = user.createJWT();
	user.password = undefined;
	res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
const updateUser = async (req, res, next) => {
	res.send("update User ");
};

export { register, login, updateUser };
