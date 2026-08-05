function welcome(req, res) {
    res.status(200).send("Welcome to the backend server!");
}

module.exports = {
    welcome,
};
