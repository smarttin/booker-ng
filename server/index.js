const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const config = require("./config/dev");
const rentalRoutes = require('./routes/rentals.route');
const userRoutes = require('./routes/users.route');
const FakeDb = require("./fake-db"); 

mongoose
  .connect(config.DB_URI_LOCAL, {
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
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
