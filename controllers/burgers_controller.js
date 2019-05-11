var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js")

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    orm.selectAll("burgers", function(result){
        // console.log(result)
        res.render("index", { burgers: result })
    })
    
})

router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });

// write a route to get all burgers
module.exports = router;