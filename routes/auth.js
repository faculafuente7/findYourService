var express = require("express");
var router = express.Router();
var  User = require("../db/models/User");
var passport = require("../server/passport");

router.get("/me", (req, res) => {
    res.send(req.user);
  });  

router.post('/register', (req,res) => {
    const user = {
        email: req.body.inputEmail,
        password: req.body.inputPassword
    }
    User.findOrCreate({where: user })
    .then(data => {
      console.log(data[0].dataValues)
      res.sendStatus(201).send(data[0].dataValues)
    });

});

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.body)
    res.send(req.body);
  });

router.get("/logout", (req,res)=>{
    req.logout();
    res.send("logged Out!")
})

module.exports = router;
