const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "database-planex.ciadgiedib9p.sa-east-1.rds.amazonaws.com",
  user: "admin",
  password: "bethilel1",
  database: "loopify",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

module.exports = connection;
