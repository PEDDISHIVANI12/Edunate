var express = require('express');
var path = require("path");
var router = require('express').Router();
var bodyParser = require('body-parser');
var mongo = require("mongoose");
//Replace the link below by mLab link
var db = mongo.connect("mongodb://localhost:27017/edunateproj", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4201');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  topic: {
    type: String
  },
  location: {
    type: String
  },
  from_date:{
    type: String
  },
  to_date:{
    type: String
  },
  time:{
    type: String
  },
  description:{
    type: String
  },
  seats:{
    type: Number
  },
  
}, {
  versionKey: false
});


var model = mongo.model('users', UsersSchema, 'users');

app.post("/api/SaveUser", function (req, res) {
  var mod = new model(req.body);
  if (req.body.mode == "Save") {
    mod.save(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: req.body.name
        });
      }
    });
  } 
  else{
    model.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      topic: req.body.topic,
      location: req.body.location,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      time: req.body.time,
      description: req.body.description,
      seats: req.body.seats,
    },
    function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(
          {
            data:req.body._id,
 } 
         );
         
      }
    })} })


app.post("/api/deleteUser", function (req, res) {
  model.remove({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted..!!"
      });
    }
  });
})

app.get("/api/getUser", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})

app.listen(8081, function () {

  console.log('Example app listening on port 8081!')
})