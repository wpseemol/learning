/**
 * user create route function here
 * @param {*} req
 * @param {*} res
 */
function userCreate(req, res) {
    const userData = req.body;
    res.status(201).json({
        message: "User create route is working!",
        userData,
    });
}

/**
 * get user route function here
 * @param {*} req
 * @param {*} res
 */
function getUser(req, res) {
    res.status(200).json({ message: "User route is working!" });
}

/**
 * get user info route function here
 * @param {*} req
 * @param {*} res
 */
function getUserInfo(req, res) {
    const userId = req.params.id;
    res.status(200).json({ message: "User info route is working!", userId });
}

/**
 * user update route function here
 * @param {*} req
 * @param {*} res
 */
function userUpdate(req, res) {
    const userId = req.params.id;
    const updatedData = req.body;
    res.status(200).json({
        message: "User update route is working!",
        userId,
        updatedData,
    });
}

/**
 * user delete route function here
 *
 * @param {*} req
 * @param {*} res
 */
function userDelete(req, res) {
    const userId = req.params.id;
    res.status(200).json({ message: "User delete route is working!", userId });
}

module.exports = {
    userCreate,
    getUser,
    getUserInfo,
    userUpdate,
    userDelete,
};
