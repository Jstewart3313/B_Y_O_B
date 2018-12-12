module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cars',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    useNullAsDefault: true,

  },
  testing: {
    client: 'pg',
    connection: 'postgres://localhost/carstest',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/test',
    },
    useNullAsDefault: true,
  },
  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
