const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "advance",
  connectionLimit: 10,
});
connection.query(`SELECT * FROM categories`, (err, result, feilds) => {
  if (err) {
    console.log("sama error");
  }
  return console.log(result);
});
