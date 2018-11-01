exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .del()
    .then(function() {
      return knex("ingredients").insert([
        { id: 20001, name: "Spaghetti" },
        { id: 20002, name: "Tomato" },
        { id: 20003, name: "Mince beef" },

        { id: 20004, name: "Chicken" },
        { id: 20005, name: "Burger Bun" },
        { id: 20006, name: "Lettuce" },
        { id: 20007, name: "Mayonase" },

        { id: 20008, name: "Tortilla wrap" },
        { id: 20009, name: "Carrot" },
        { id: 20010, name: "Cuccumber" },

        { id: 20011, name: "Bread" },
        { id: 20012, name: "Steak" },
        { id: 20013, name: "Potatoes" },

        { id: 20014, name: "Salmon" },

        { id: 20015, name: "Pastry" },
        { id: 20016, name: "Egg" },
        { id: 20017, name: "Cream" },
        { id: 20018, name: "Milk" },
        { id: 20019, name: "Bacon" },

        { id: 20020, name: "Mushroom" },
        { id: 20021, name: "lentil" },
        { id: 20022, name: "Broccoli" },

        { id: 20023, name: "Pizza base" },
        { id: 20024, name: "Cheese" },
        { id: 20025, name: "Tomatoe paste" }
      ]);
    });
};
