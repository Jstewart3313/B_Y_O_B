
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('models', function(table) {
      table.integer('maker_id').unsigned();
      table.foreign('maker_id')
        .references('makers.id')
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('models', function(table) {
      table.dropColumn('maker_id');
    })
  ]);
};
