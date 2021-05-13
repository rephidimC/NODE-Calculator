//jshint esversion:6
const express = require("express");
const bodyParser= require("body-parser");

const app = express();

// app.get("/", function(req, res) {
//   res.send("<h1>Calculator</h1><br><input><button>type your words</button><br><br><input><button>second number</button>");
// });
app.use(bodyParser.urlencoded({extended: true}));
app.get("/about", function(req, res) {
  res.send("Dami is beautiful!");
});

app.get("/", function(req, res) {
  //just as the word "get", we're saying 'get' it from here(below) and implement it whenever I run my script code.
    res.sendFile(__dirname + "/index.html");
  //this works because we know the directory on our local PC, where the server is hosted.
  //But for something like an hosted website, what we use is "__dirname"
  //console.log(__dirname);
});



app.post("/", function(req, res) {
  // var num1 = req.body.num1;
  // var num2 = req.body.num2;
  // var result = num1 + num2;
  // console.log (result);

  // The above gives ab, as in a+b=ab, whcih would be wrong.
  // Why this?
  // javascript sees the num1 and 2 as strings(text), hence, we need to change them to numbers.

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  console.log (result);


  res.send("The result of the calculation is " + result);
});

// app.use(express.static("Calculator"));



app.listen(3000, function(){
  console.log("Listen to me baby");
});
