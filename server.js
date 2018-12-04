const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('BYOB');
});

app.get('/', (request, response) => {
  // DO THINGS HERE
});

app.get('/', (request, response) => {
  // DO THINGS HERE
});

app.get('/', (request, response) => {
  // DO THINGS HERE
});

app.post('/', (request, response) => {
  // DO THINGS HERE
});

app.post('/', (request, response) => {
  // DO THINGS HERE
});

app.put('/', (request, response) => {
  // DO THINGS HERE
});

app.patch('/', (request, response) => {
  // DO THINGS HERE
});

app.delete('/', (request, response) => {
  // DO THINGS HERE
});

app.delete('/', (request, response) => {
  // DO THINGS HERE
});


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});