const express = require("express");
const hbs = require("express-handlebars");

const foodRoutes = require("./routes/food");

const server = express();

// Middleware

server.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
server.set("view engine", "hbs");
server.use(express.urlencoded({ extended: true }));

// Routes
server.use(express.static("public"));

server.use("/", foodRoutes);

module.exports = server;
