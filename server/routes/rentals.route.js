const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../controllers/user.controller");
const { getAllRentals, getRental, createRental } = require("../controllers/rental.controller");

router.get('/secret', authMiddleware, function (req, res) {
res.json({"secret": true});
})

router.get("/:id", getRental);

router.get("", getAllRentals);

router.post("", authMiddleware, createRental);

module.exports = router;
