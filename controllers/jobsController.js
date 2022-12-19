const createJob = async (req, res, next) => {
	res.send("create job");
};
const getAllJobs = async (req, res, next) => {
	res.send("get All Jobs");
};
const updateJob = async (req, res, next) => {
	res.send("update job");
};
const delateJob = async (req, res, next) => {
	res.send("delate Job");
};
const showStats = async (req, res, next) => {
	res.send("show Stats");
};

export { createJob, getAllJobs, updateJob, delateJob, showStats };
