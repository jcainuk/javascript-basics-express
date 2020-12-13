const createPerson = (name, age) => {
  return {
    // Parameters are values so make the keys.
    name,
    age
  };
};

const getName = object => {
  // Practising dot notation to access name value
  return object.name;
};

const getProperty = (property, object) => {
  // the test passes in a string "age" as a parameter
  // you need to account for that by using bracket notation
  // object."age" is completely wrong
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  // forEach doesn't  return things so use map
  // map returns things so it might be easier here
  return people.map(person => person.age);

  // OR with forEach:
  // let ages = [];
  // people.forEach((person) => {
  // ages.push(person.age);
  // })
};

const findByName = (name, people) => {
  // PASSED
  return people.find(person => person.name === name);
  // what is the difference between filter and find?
  // It is because find() finds the first element that matches the filter AN ELEMENT!
  // Whereas filter() returns all elements that match the filter
  // the result being an ARRAY no matter what
};

function findHondas(cars) {
  // Here use filter to return an array of all Honda cars
  return cars.filter(car => car.manufacturer === "Honda");
}

const averageAge = people => {
  // Here use reduce to total up the ages on a loop
  // Reduce loops through several rounds adding it all up
  // Start it from index 0
  // divide by number of people.length (total number of people)

  return (
    people.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      0
    ) / people.length
  );
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    // Parameters are values so make the keys.
    name,
    age,
    // Make the function
    introduce(greetingName) {
      return `Hi ${greetingName}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
