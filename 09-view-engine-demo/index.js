const express = require("express");
const expHbs = require("express-handlebars");

const app = express();

app.set("view engine", "hbs");
// app.set("view engine", "ejs");
app.engine(
  "hbs",
  expHbs({
    extname: ".hbs",
    layoutDir: __dirname + "/views/layouts",
    partialDir : __dirname+"/views/partials"
  })
);

const user = { firstName: "John", lastName: "Doe" };
const users = [
  {
    name: "jenny doe",
    age: 32,
    isAdmin: true,
    comments: [
      { body: "Awesome User", stars: 4 },
      { body: "Superb User", stars: 5 },
    ],
  },
  { name: "james doe", age: 34, isAdmin: false },
  {
    name: "alice doe",
    age: 35,
    isAdmin: true,
    comments: [
      { body: "Not that great", stars: 3 },
      { body: "love it", stars: 4 },
    ],
  },
];

app.get("/profile", (req, res) => {
  res.render("index", {
    layout: "main",
    user,
    users,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(9003, () => console.log("Server started at PORT : 9003"));
