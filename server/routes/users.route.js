const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { login, register } = require("../controllers/user.controller");


router.post("/auth", login);

router.post("/register", register);

module.exports = router;
