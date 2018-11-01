exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_joins", table => {
    table.increments("id").primary();
    table.integer("ingredient_id");
    table.integer("dish_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe_joins");
};
