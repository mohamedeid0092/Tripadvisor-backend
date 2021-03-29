const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.put('/update-info/:id',UserController.userInfo);

router.get('/read-user/:id',UserController.getUser);

module.exports = router;
