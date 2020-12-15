const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const { getNthElement, arrayToCSVString } = require('./lib/arrays');

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

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b)});
  }
  else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.'});
  }
  else if (!(req.body.a) || !(req.body.b))  {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.'});
  }
  else if (isNaN(req.body.a) || isNaN(req.body.b))  {
    res.status(400).json({ error: 'Parameters must be valid numbers.'});
  }
  else {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

app.post('/booleans/negate/', (req, res) => {
  
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });

});

app.get('/booleans/is-odd/:id', (req, res) => {
  if (isNaN(req.params.id))  {
    res.status(400).send({ error: 'Parameter must be a number.'});
  }
  else {
    res.status(200).send({ result: isOdd(req.params.id)});
}
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
if (req.params.char.length === 1){
  res.status(200).send({ result: startsWith(req.params.char, req.params.string)});
  }
else {
  res.status(400).send({ error: 'Parameter "character" must be a single character.'});
}
});

app.post('/arrays/element-at-index/:index/', (req, res) =>{
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });

});


module.exports = app;
