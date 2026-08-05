const express = require("express");

const controller = require("../controllers/welcome.controller");

const router = express.Router();

router.get("/", controller.welcome);

module.exports = router;
