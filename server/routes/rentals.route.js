const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../controllers/user.controller");
const { getAllRentals, getRental } = require("../controllers/rental.controller");

router.get('/secret', authMiddleware, function (req, res) {
res.json({"secret": true});
})

router.get("", getAllRentals);

router.get("/:id", getRental);

module.exports = router;
