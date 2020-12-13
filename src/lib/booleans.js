const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  if (a || b === true) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (a === false && b === false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  if ((a === false && b === true) || (a === true && b === false)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (i = 0; i < vowels.length; i += 1) {
    const trueResult = string.includes(vowels[i]);

    if (trueResult === true) {
      return true;
    }
  }
  return false;
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
