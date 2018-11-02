const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  getIngredients: getIngredients,
  getAllDishes: getAllDishes,
  addNewDish: addNewDish
};

function getIngredients(testConn) {
  const conn = testConn || connection;
  return conn("ingredients").select();
}

function getAllDishes(testConn) {
  const conn = testConn || connection;
  return conn("dishes")
    .join("recipe_joins", "dishes.id", "recipe_joins.dish_id")
    .select("*", "dishes.name AS dish_name")
    .join("ingredients", "ingredients.id", "recipe_joins.ingredient_id")
    .then(dishes => {
      return formatDishes(dishes);
    });
}

function formatDishes(dishes) {
  let dishesList = [];
  for (let i = 0; i < dishes.length; i++) {
    if (!dishesList.includes(dishes[i].dish_name)) {
      dishesList.push(dishes[i].dish_name);
    }
  }

  //create list of dish objects
  dishesList = dishesList.map(dish => {
    return { name: dish, items: [] };
  });

  //Check ingredients and add to dish if has dish name
  for (let i = 0; i < dishes.length; i++) {
    //finds dishlist item that matches ingredient dish name
    let theDish = dishesList.find(item => {
      return item.name == dishes[i].dish_name;
    });

    theDish.items.push(dishes[i]);
  }

  return dishesList;
}

function addNewDish(dishes, ingredients, testConn) {
  const conn = testConn || connection;
  return conn("dishes")
    .insert([{ name: dishes.name }])
    .then(dishId => {
      ingredients = ingredients.map(ingredient => {
        return {
          dish_id: dishId[0],
          ingredient_id: ingredient
        };
      });

      return conn("recipe_joins").insert(ingredients);
    });
}
