var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));
app.use('*',function(req,res){
  res.send("hi")
})

var server = app.listen(3000, function () {
  console.log("Server Started")
})