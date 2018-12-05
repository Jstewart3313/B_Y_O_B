const vehicleData  = require('../../../data/models.js');
const makersData  = require('../../../data/makers.js');

const createMaker = (knex, makersData) => {
  return knex('makers').insert({
    maker: makersData.name,
    year: makersData.year
  }, 'id')
  .then(makerDataId => {
    let vehiclePromises = [];

    makersData.models.forEach(vehicle => {
      vehiclePromises.push(
        createVehicle(knex, {
          model: vehicle.model,
          displacement: vehicle.displacement,
          engine: vehicle.engine,
          drivetrain: vehicle.drivetrain,
          horsepower: vehicle.horsepower,
          torque: vehicle.torque,
          price: vehicle.price,
          maker_id: makerDataId[0]
        })
      )
    });

    return Promise.all(vehiclePromises);
  })
};

const createVehicle = (knex, vehicle) => {
  return knex('models').insert(vehicle);
};

exports.seed = (knex, Promise) => {
  return knex('models').del()
    .then(() => knex('makers').del()) 
    .then(() => {
      let makerPromises = [];

      makersData.forEach(maker => {
        makerPromises.push(createMaker(knex, maker));
      });

      return Promise.all(makerPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};