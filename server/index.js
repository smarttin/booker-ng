const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const rentalRoutes = require('./routes/rentals');
const FakeDb = require("./fake-db");

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log("Connected to database!");
  })
  .catch(err => {
    console.log("Connection failed!", err);
  });

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
