const vehicleData  = require('../../../data/models.js');
const testData  = require('../../../data/makers.js');

const createMaker = (knex, testData) => {
  return knex('makers').insert({
    maker: testData.name,
    year: testData.year
  }, 'id')
  .then(makerDataId => {
    let vehiclePromises = [];

    testData.models.forEach(vehicle => {
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

      testData.forEach(maker => {
        makerPromises.push(createMaker(knex, maker));
      });

      return Promise.all(makerPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
