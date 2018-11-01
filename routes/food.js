const express = require("express");

const db = require("../db");

const exampleIngredientsObject = require("../exampleIngredients");
const exampleDishesObject = require("../exampleDishes");

const router = express.Router();

router.get("/", (req, res) => {
  // res.render("ingredients", exampleIngredientsObject);
  db.getIngredients()
    .then(ingredients => {
      let ingredientList = {
        categories: [
          {
            name: "Alll the stuff",
            items: ingredients
          }
        ]
      };
      res.render("ingredients", ingredientList);
    })
    .catch(err => {
      res.status(500).send("Well this isnt good :(" + err.message);
    });
});

router.get("/dishes", (req, res) => {
  // res.render("dishes", exampleDishesObject);
  db.getAllDishes()
    .then(dishes => {
      //let dishesList = db.formatDishes(dishes);
      //console.log(JSON.stringify(dishesList, null, 2));
      res.render("dishes", { dishes: dishes });
    })
    .catch(err => {
      res.status(500).send("I think I dropped a plate" + err.message);
    });
});

module.exports = router;
