//Loosly coupled router, which can be used anywhere else
var router = require("express").Router();


   
    app.get("/", function(req, res) {
      res.render("home");
    });
