# BYOBackend - Vehicle-by-year API

[![Build Status](https://travis-ci.org/Jstewart3313/BYOB.svg?branch=master)](https://travis-ci.org/Jstewart3313/BYOB)


### Developers:

Justin Stewart [Github](https://github.com/Jstewart3313)

#### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `psql CREATE DATABASE Vehicles`

* `knex migrate:latest`

* `knex seed:run`

### API Endpoints
#### vehicle Manufacturer's
```
GET /api/v1/makers // get all stations
GET /api/v1/makers/:id // get a specific vehicle Maker
POST /api/v1/makers  // Add a new Maker to the DB
PUT /api/v1/makers/:maker_id  // Make changes to a Maker
DELETE /api/v1/makers/:maker_id  // delete a Maker
```
#### Vehicle Models
```
GET /api/v1/models // get all vehicle Models
GET /api/v1/models/:id  // get a specific vehicle Model
POST /api/v1/makers/:id/models  // Add a new Model to the DB
DELETE /api/v1/makers/:maker_id/models/:model_id  // delete a vehicle Model
```

## Technologies Used
- JavaScript
- jQuery
- Node.js
- Express
- Knex.js
- Heroku
- Travis CI

## Project Requirements
Project spec can be found [here](http://frontend.turing.io/projects/build-your-own-backend.html).

Feature checklist can be found here [here](http://frontend.turing.io/projects/byob/backend-feature-checklist.html).
