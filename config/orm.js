// Import MySQL connection.
var connection = require("../config/connection.js");

// helper functions for orm / controllers
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    createNew: function(tableInput, columns, values, cb) {
      // build query string with our helper functions to corrctly parse query
      var queryString = "INSERT INTO " + tableInput + " (" + columns.toString() + ") VALUES (" + printQuestionMarks(values.length) + ") ";
      // log  to make sure queryString is what we expect
      console.log(queryString);
  
      connection.query(queryString, values, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(tableInput, objColVals, id, cb) {
      var queryString = "UPDATE " + tableInput + " SET " + objToSql(objColVals) + " WHERE id=" + id;
  
      // log  to make sure queryString is what we expect
      console.log(queryString);
      // console.log(objToSql(objColVals));
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}


module.exports = orm;

