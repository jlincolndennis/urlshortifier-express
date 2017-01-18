
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('routes', function (table) {
      table.increments('id');
      table.string('token').unique();
      table.text('target_url');
    })
};

exports.down = function(knex, Promise) {
return knex.schema
  .dropTable('routes')
};
