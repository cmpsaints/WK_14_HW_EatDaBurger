var mysql = require("mysql");

var connection;

// ** Connect with JawsDB database on Heroku app. If not available, run locally. **
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
	    host: "localhost",
	    user: "root",
	    password: "Qwerttyy123_",
	    database: "burgers_db"
	});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ** export MySQL connection **
module.exports = connection;