var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/usersSchemaPract');
mongoose.connect('mongodb://192.168.99.100:27017/usersSchemaPract')
let User = require('../models/user');


/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

// #7
router.get("/api/users", (req, res, next) => {
  User.find({}, (err, users) => {
    return res.json(users);
  });
});

router.post("/api/users", (req, res, next) => {
  delete req.body._id;
  User.create(req.body, (err, user) => {
    if (err) return res.json(err)
    else return res.json(user)
  });
});

router.put("/api/users/:id", (req, res, next) => {
  User.update({_id: req.params.id}, req.body, (err, rawData) => {
    if (err) return res.json(err)
    else return res.json(true)
  });
});

router.delete("/api/users/:id", (req, res, next) => {
  User.deleteOne({_id: req.params.id}, (err, rawData) => {
    if (err) return res.json(err) 
    else return res.json(true)
  });
});

module.exports = router;
