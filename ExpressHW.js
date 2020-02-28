const express = require("express");
const app = express();

//Hello World
app.get("/", (req, response) => {
  response.send("Hello, world!");
});

//Cats and Dogs
app.get("/cats", (req, res) => {
  res.send("Meow");
});

app.get("/dogs", (req, res) => {
  res.send("Woof");
});

app.get("/cats_and_dogs", (req, res) => {
  res.send("Either living together or **HORRIFIC SHRIEKING*");
});

//Route Params
app.get("/greet/:name", (req, res) => {
  let name = req.param("name");
  console.log(name);
  res.send(`Greetings, ${name}`);
});

//YOB
app.get("/year?", (req, res) => {
  let age = req.param("age");
  let date = new Date();
  let year = date.getFullYear() - Number(age);
  res.send(`You were born in ${year}`);
});

//Server Listening
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
