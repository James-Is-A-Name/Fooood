exports.seed = function(knex, Promise) {
  return knex("recipe_joins")
    .del()
    .then(function() {
      return knex("recipe_joins").insert([
        //Spag Bol
        { id: 30001, ingredient_id: 20001, dish_id: 10001 },
        { id: 30002, ingredient_id: 20002, dish_id: 10001 },
        { id: 30003, ingredient_id: 20003, dish_id: 10001 },

        //Chicken Burger
        { id: 30004, ingredient_id: 20004, dish_id: 10002 },
        { id: 30005, ingredient_id: 20005, dish_id: 10002 },
        { id: 30006, ingredient_id: 20006, dish_id: 10002 },
        { id: 30007, ingredient_id: 20007, dish_id: 10002 },

        //Chicken Wrap
        { id: 30008, ingredient_id: 20004, dish_id: 10003 },
        { id: 30009, ingredient_id: 20006, dish_id: 10003 },
        { id: 30010, ingredient_id: 20008, dish_id: 10003 },
        { id: 30011, ingredient_id: 20009, dish_id: 10003 },
        { id: 30012, ingredient_id: 20007, dish_id: 10003 },

        //Steak Sandwich,
        { id: 30013, ingredient_id: 20011, dish_id: 10004 },
        { id: 30014, ingredient_id: 20012, dish_id: 10004 },
        { id: 30015, ingredient_id: 20013, dish_id: 10004 },
        { id: 30016, ingredient_id: 20006, dish_id: 10004 },

        //Salmon Salad
        { id: 30017, ingredient_id: 20014, dish_id: 10005 },
        { id: 30018, ingredient_id: 20006, dish_id: 10005 },
        { id: 30019, ingredient_id: 20009, dish_id: 10005 },
        { id: 30020, ingredient_id: 20010, dish_id: 10005 },
        { id: 30021, ingredient_id: 20002, dish_id: 10005 },

        //Quiche
        { id: 30022, ingredient_id: 20015, dish_id: 10006 },
        { id: 30023, ingredient_id: 20016, dish_id: 10006 },
        { id: 30024, ingredient_id: 20017, dish_id: 10006 },
        { id: 30025, ingredient_id: 20018, dish_id: 10006 },
        { id: 30026, ingredient_id: 20019, dish_id: 10006 },

        //Mushroom and lentil Spaghetti
        { id: 30027, ingredient_id: 20001, dish_id: 10007 },
        { id: 30028, ingredient_id: 20020, dish_id: 10007 },
        { id: 30029, ingredient_id: 20021, dish_id: 10007 },
        { id: 30030, ingredient_id: 20022, dish_id: 10007 },
        { id: 30031, ingredient_id: 20002, dish_id: 10007 },

        //Pizza
        { id: 30032, ingredient_id: 20023, dish_id: 10008 },
        { id: 30033, ingredient_id: 20024, dish_id: 10008 },
        { id: 30034, ingredient_id: 20025, dish_id: 10008 },
        { id: 30035, ingredient_id: 20022, dish_id: 10008 },

        //Omlette
        { id: 30036, ingredient_id: 20016, dish_id: 10009 },
        { id: 30037, ingredient_id: 20018, dish_id: 10009 },
        { id: 30038, ingredient_id: 20020, dish_id: 10009 },
        { id: 30039, ingredient_id: 20024, dish_id: 10009 }
      ]);
    });
};
