// Create a web server.
// When a POST request is made to the path '/comments', it should add the data from the request body to the 'comments' array.
// When a GET request is made to the path '/comments', it should return the array of comments.
// The 'comments' array should be stored in a module, and it should be the same array that is returned for every GET request.
// The array should be initialized as an empty array in the module.
// Use the 'express' module to create the web server.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments');

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).send();
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000);
