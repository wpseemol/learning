const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the User API");
});

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

module.exports = router;
