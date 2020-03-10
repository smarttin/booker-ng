const Rental = require("../models/rental.model");

const getAllRentals = (req, res) => {
  Rental.find({})
    .select("-bookings")
    .exec((err, foundRentals) => {
      if (err) {
        res.status(401).send({
          errors: [{ title: "Rental Error", details: "Nothing found" }]
        });
      }
      res.json(foundRentals);
    });
};

const getRental = (req, res) => {
  const rentalId = req.params.id;

  Rental.findById(rentalId)
    .populate("user", "username -_id")
    .populate("bookings", "startAt endAt -_id")
    .exec((err, foundRental) => {
      if (err) {
        res
          .status(422)
          .send({
            errors: [
              { title: "Rental Error", detail: "Could not find the Rental" }
            ]
          });
      }
      return res.json(foundRental);
    });
};

module.exports = {
  getAllRentals,
  getRental
}
