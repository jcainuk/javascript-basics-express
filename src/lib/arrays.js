const getNthElement = (index, array) => {
  // Rui solution:

  return array[index % array.length];

  // My old solution:

  // while (index >= array.length) {
  // return array[index - array.//length];
  // }
  // return array[index];
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

function numbersToStrings(numbers) {
  return numbers.map(String);
}

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

function reverseWordsInArray(strings) {
  return strings.map(string =>
    string
      .split("")
      .reverse()
      .join("")
  );
}

function onlyEven(numbers) {
  // let evens = numbers.filter(number => number % 2 === 0);
  // return evens;
  return numbers.filter(number => number % 2 === 0);
}

const removeNthElement2 = (index, array) => {
  const arrayCopy = [...array];
  arrayCopy.splice(index, 1);
  return arrayCopy;
};

function elementsStartingWithAVowel(strings) {
  // create array of vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // filter allows us to loop on each element of array and do check on it
  return strings.filter(word => {
    // create a variable for first letter of current word.
    const firstLetter = word.charAt(0);
    // verify if array of vowels contains word we are checking currently
    return vowels.includes(firstLetter);
  });
}

function removeSpaces(string) {
  return string.split(" ").join("");
}

const sumNumbers = numbers => {
  // accumulator = total;
  // currentValue = item in array
  // 0 = where we start in array (current value)
  // reduce is like a for loop but cleaner

  // our test array = [1, 3, 5, 6, 2, 8]

  // Round 1: accumulator=0, currentValue=1, accumulator =>1
  // Round 2: accumulator=1, currentValue=3, accumulator =>4
  // Round 3: accumulator=4, currentValue=5, accumulator =>9
  // Round 4: accumulator=9, currentValue=6, accumulator =>15
  // Round 5: accumulator=15, currentValue=2, accumulator =>17
  // Round 6: accumulator=17, currentValue=8, accumulator =>25

  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

function sortByLastLetter(strings) {
  // Create a sort function with 2 parameters to compare: a and b
  // Sort() loops over the elements
  // As sort() is like a loop it will have multiple rounds
  return strings.sort(function(element1, element2) {
    // Store a variable for last character of element1
    // Length-1 because length of word is not zero-indexed!
    // .length is number of letters!
    const lastA = element1.charAt(element1.length - 1);

    // Store a variable for last character of param element2
    const lastB = element2.charAt(element2.length - 1);

    // Place element2 before element1
    if (lastA > lastB) {
      // 1 corresponds to letter's UTF-16 code value
      // 1 puts the letter earlier in sequence
      return 1;

      // Place element1 after element2
    }
    if (lastA < lastB) {
      // -1 corresponds to letter's UTF-16 code value
      // -1 puts the letter later in sequence
      return -1;

      // Leave order of element1 and element2 unchanged
    }
    return 0;
  });
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
