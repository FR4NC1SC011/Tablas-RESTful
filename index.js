const express = require('express');

const app = express();

app.get('/results/:n1/:n2', (request, response) => {
  response.send(request.params.n1 + request.params.n2);
});

app.post('/results/', (request, response) => {
  response.send(request.body.n1 * request.body.n2);
});

app.put('/results/', (request, response) => {
  response.send(request.body.n1 * request.body.n2);
});

app.patch('/results/', (request, response) => {
  response.send(request.body.n1 * request.body.n2);
});

app.delete('/results/:n1/:n2', (request, response) => {
  response.send(request.params.n1 - request.params.n2);
});

app.listen(4000, () => {
  console.log("App up and runnig");
});
