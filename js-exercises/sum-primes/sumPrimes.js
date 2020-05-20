function isPrime(number, startRange = 2) {
  if (number === 2) {
    return true;
  } else {
    for (let index = startRange; index < number; index++) {
      if (number % index === 0) {
        return false;
      }
    }
    return true;
  }
}
function sumPrimes(upperLimit) {
  let primeNumbers = [];
  let startRange = 2;
  while (startRange <= upperLimit) {
    if (isPrime(startRange)) {
      primeNumbers.push(startRange);
    }
    startRange++;
  }
  return primeNumbers.reduce((a, c) => a + c, 0);
}

export { sumPrimes };
