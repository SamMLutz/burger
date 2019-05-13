// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            console.log(res);
            cb(res);
        })
    },
    createNew: function(name, cb) {
        orm.createNew("burgers", [
          "burger_name", "devoured"
        ], [
          name, false
        ], cb);
    },
    update: function(id, cb) {
        var currentBurger = id;
        orm.update("burgers", {
          devoured: true
        }, currentBurger, cb);
      }
};


module.exports = burger;