const express = require("express");
const router = express.Router();
const Rental = require("../models/rental.model");
const { authMiddleware } = require("../controllers/user.controller");

router.get('/secret', authMiddleware, function (req, res) {
res.json({"secret": true});
})

router.get("", (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    if (err) {
      res.status(401).send({errors: [{title: "Rental Error", details: "Nothing found"}]})
    }
    res.json(foundRentals);
  });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (err, foundRental) => {
    if (err) {
      res.status(422).send({errors: [{title: "Rental Error", detail: "Could not find the Rental"}]})
    }
    return res.json(foundRental);
  });
});

module.exports = router;
