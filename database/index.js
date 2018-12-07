const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

connection.connect();

module.exports = {
  users: {
    signup({ name, email, password }, callback) {
      // TODO: insert user into users table
    }
  }
};
