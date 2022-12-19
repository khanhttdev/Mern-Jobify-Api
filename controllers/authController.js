const register = async (req, res, next) => {
	res.send("Register User");
};
const login = async (req, res, next) => {
	res.send("login User");
};
const updateUser = async (req, res, next) => {
	res.send("update User ");
};

export { register, login, updateUser };
