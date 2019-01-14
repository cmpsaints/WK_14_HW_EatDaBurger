var orm = require("../config/orm.js");

// ** passes in query params as required by ORM (plus callback) to receive data **
var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	insertOne: function(burgerName, callback) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			callback(res);
		});
	},
	updateOne: function(burgerId, callback) {
		orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res) {
			callback(res);
		});
	}
};

// ** export **
module.exports = burger;