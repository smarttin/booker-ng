const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../controllers/user.controller");
const { createBooking } = require('../controllers/booking.controller');

router.post('', authMiddleware, createBooking);

module.exports = router;