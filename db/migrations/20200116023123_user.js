
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email').index().defaultTo(null);
    table.string('first_name').defaultTo(null);
    table.string('last_name').defaultTo(null); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
