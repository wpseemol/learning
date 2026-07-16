const express = require("express");
const router = express.Router();

const {
    userCreate,
    getUser,
    getUserInfo,
    userUpdate,
    userDelete,
} = require("../controllers/userControllers");

router.post("/", userCreate);
router.get("/", getUser); // done
router.get("/:id", getUserInfo); // done
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);

// export a router
module.exports = router;
