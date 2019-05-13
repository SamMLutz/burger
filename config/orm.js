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
    createNew: function(tableInput, cols, values, cb) {
      var queryString = "INSERT INTO " + tableInput + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(values.length) + ") ";
      // build query string with our helper functions to corrctly parse URL
      // queryString += " (";
      // queryString += cols.toString();
      // queryString += ") ";
      // queryString += "VALUES (";
      // queryString += printQuestionMarks(vals.length);
      // queryString += ") ";
      // log  to make sure queryString is what we expect
      console.log(queryString);
  
      connection.query(queryString, values, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}


module.exports = orm;

