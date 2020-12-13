const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  // const name = req.params.id; //id is the wildcard defined in the path
  // const message = sayHello(name);
  // const jsonResult = {result: message};
  // res.json(jsonResult);
  // console.log('name =', name, ' |message =', message, ' |jsonresult =', jsonResult);
  res.json({result: sayHello(req.params.id)});
});

app.get('/strings/upper/:word', (req,res) => {
  res.json({result: uppercase(req.params.word)});
});

app.get('/strings/lower/:word', (req,res) => {
  res.json({result: lowercase(req.params.word)});
});

app.get('/strings/first-characters/:word', (req, res) => {
  let n = 1;
  console.log(req.query);
  if ('length' in req.query) {
    n = req.query.length;
  }
  res.json({result: firstCharacters(req.params.word, n)});
  
  //Advanced:
  // res.json({result: firstCharacters(req.params.word, req.query?.length || 1)});
});

module.exports = app;
