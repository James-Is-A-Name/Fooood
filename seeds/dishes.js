exports.seed = function(knex, Promise) {
  return knex("dishes")
    .del()
    .then(function() {
      return knex("dishes").insert([
        { id: 10001, name: "Spag bol" },
        { id: 10002, name: "Chicken burger" },
        { id: 10003, name: "Chicken wrap" },
        { id: 10004, name: "Steak sandwich" },
        { id: 10005, name: "Salmon salad" },
        { id: 10006, name: "Quiche" },
        { id: 10007, name: "Mushroom and lentil spaghetti" },
        { id: 10008, name: "Pizza" },
        { id: 10009, name: "Omlette" }
      ]);
    });
};
