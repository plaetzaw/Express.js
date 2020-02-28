const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, response) => {
  response.send("<h1>It's working, its working</h1>");
});

app.get("/pictures?", (req, res) => {
  res.send("pictures");
});

//cat, cats, catfancy, catsfancy
app.get("/cats?(fancy)?", (req, res) => {
  res.send("The Cats are hella fancy yo");
});

//anything after "/dog" will match!
app.get("/dog*", (req, res) => {
  res.send("Doggos are good boys always");
});

app.get("/contact", (req, res) => {
  let contact = req.param("name");
  console.log(contact);
  res.send(`Add your name to the url}`);
});

app.get("/contact/:name", (req, res) => {
  let name = req.param("name");
  res.send(`your name is ${name}`);
});

app.get("/add/:num1/:num2", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let sumnum = Number(num1) + Number(num2);
  res.send(`${num1} + ${num2} = ${sumnum}`);
});

app.get("/minus/:num1/:num2", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let minusNum = Number(num1) - Number(num2);
  res.send(`${num1} - ${num2} = ${minusNum}`);
});

app.get("/multiply/:num1/:num2", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let multNum = Number(num1) * Number(num2);
  res.send(`${num1} * ${num2} = ${multNum}`);
});

app.get("/divide/:num1/:num2", (req, res) => {
  let num1 = req.param("num1");
  let num2 = req.param("num2");
  let divNum = Number(num1) / Number(num2);
  res.send(`${num1} / ${num2} = ${divNum}`);
});

app.get("/pics", (req, res) => {
  let imgVar = req.param("img");
  let imgVar2 = req.param("img");
  let imgVar3 = req.param("img");
  let imgVar4 = req.param("img");

  res.send(`<h1>MyImages</h1>
  <img src=${imgVar} />`),
    `<img src=${imgVar2} />`,
    `<img src=${imgVar3} />`,
    `<img src=${imgVar4} />`;
});

app.listen(1234, () => {
  console.log("listening on port 1234");
});
