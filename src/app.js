const express = require('express');
const { add, subtract, multiply, divide } = require('./lib/numbers');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.use(express.json());

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
  // console.log(req.query);
  if ('length' in req.query) {
    n = req.query.length;
  }
  res.json({result: firstCharacters(req.params.word, n)});
  
  //Advanced:
  // res.json({result: firstCharacters(req.params.word, req.query?.length || 1)});
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b))  {
    res.status(400).json({error: 'Parameters must be valid numbers.'});
  }
  res.status(200).json({result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b))  {
    res.status(400).json({error: 'Parameters must be valid numbers.'});
  }
  res.status(200).json({result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!(req.body.a) || !(req.body.b))  {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.'});
  }
  else if (isNaN(req.body.a) || isNaN(req.body.b))  {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.'});
  }
  else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: divide(req.body.a, req.body.b)});
  }
  else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.'});
  }
  else if (!(req.body.a) || !(req.body.b))  {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.'});
  }
  else if (isNaN(req.body.a) || isNaN(req.body.b))  {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.'});
  }
  else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
});

module.exports = app;
