var connection = require("./connection.js");

// ** ORM : passes in query params for all 3 methods (& callbacks) to receive data from `burgers_controller.js` model **
var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [tableInput], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	insertOne: function(tableInput, columnName, burgerName, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, callback) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	}
};

// ** export ORM **
module.exports = orm;