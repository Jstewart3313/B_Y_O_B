
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('makers', function(table) {
      table.increments('id').primary();
      table.string('maker')
      table.integer('year')

      table.timestamp(true, true)
    }),

    knex.schema.createTable('models', function(table) {
      table.increments('id').primary();
      table.string('model');
      table.string('displacement');
      table.string('engine');
      table.string('drivetrain');
      table.integer('horsepower');
      table.integer('torque');
      table.integer('price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('models'),
    knex.schema.dropTable('makers')
  ])
};
