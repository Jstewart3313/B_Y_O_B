const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);


app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('BYOB');
});

app.get('/api/v1/maker', (request, repsonse) => {
  database('maker')
})



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});