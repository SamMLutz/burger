var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js")

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    orm.selectAll("burgers", function(result){
        console.log(result)
        res.render("index", { burgers: result })
    })
})

router.post("/burgers/create", function(req, res) {
    burger.createNew(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });

  router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });


module.exports = router;