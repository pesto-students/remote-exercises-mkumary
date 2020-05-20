function sumAll(range = [0,0]) {
  let start = Math.min(...range);
  let end = Math.max(...range);
  let sumAll = 0;
  while (start <= end) { 
    sumAll = sumAll + start;
    start++;
  }
  return sumAll;
}

export {
  sumAll,
};
