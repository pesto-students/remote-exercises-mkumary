const sumAll = numbers => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const generateFibs = number => { 
  
}
function sumFibs(upperLimit) {
  let firstNumber = 0;
  let secondNumber = 1;
  let series = [firstNumber, secondNumber]
  for (let i = 2;  series[i-1] <= upperLimit; i++) { 
    series[i] = series[i-1] + series[i-2];
  }
  return series[series.length - 1];
}

export {
  sumFibs,
};
