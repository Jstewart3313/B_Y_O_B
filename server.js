const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.set("port", process.env.PORT || 3000);
app.locals.title = "BYOB";
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("BYOB");
});

app.get("/api/v1/makers", (request, response) => {
  database("makers")
    .select()
    .then(carMakers => {
      response.status(200).json(carMakers);
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.get("/api/v1/makers/:id", (request, response) => {
  database("makers")
    .where("id", request.params.id)
    .select()
    .then(carMakers => {
      if (carMakers.length) {
        response.status(200).json(carMakers);
      } else {
        response.status(404).json({
          error: `Could not find project with id ${request.params.id}`
        });
      }
    });
});

app.get("/api/v1/models", (request, response) => {
  database("models")
    .select()
    .then(carModels => {
      response.status(200).json(carModels);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/models/:id", (request, response) => {
  database("models")
    .where("id", request.params.id)
    .select()
    .then(carModels => {
      if (carModels.length) {
        response.status(200).json(carModels);
      } else {
        response.status(404).json({
          error: `Could not find project with id ${request.params.id}`
        });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post("/api/v1/makers", (request, response) => {
  const maker = request.body;
  for (let requiredParameter of ["maker", "year"]) {
    if (!maker[requiredParameter]) {
      return response
        .status(422)
        .send({ error: "There was no Maker to add!" });
    }
  }
  database("makers")
    .insert(maker, "id")
    .then(newMaker => {
      response.status(201).json({ id: newMaker[0] });
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.post('/api/v1/models', (request, response) => {
  const model = request.body;

  for ( let requiredParameters of [
  'model',
  'displacement',
  'engine',
  'drivetrain',
  'horsepower',
  'torque',
  'price', ]) {
    if(!maker[requiredParameters]) {
      return response
        .status(422)
        .send({error: 'There was no Model to add!'})
    }
  }

  database("models")
    .insert( model, 'id')
    .then( newModel => {
      response.status(201).json({id: newModel[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}.`);
});

module.exports = app;