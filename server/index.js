const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const db = require("../database");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

// bodyParser will parse the bodies of our incoming requests before it hits our endpoints
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", (req, res) => {
  // TODO: add user to the database
});

app.post("/login", (req, res) => {
  // TODO: if user is in the database
  // check to see if given password matches
  // the password in the db
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
