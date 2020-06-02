const limitFunctionCallCount = (fn, maxCount) => {
  let count = 1;
  return (...params) => {
    if (count > maxCount) {
      return null;
    } else {
      count++;
      return fn(...params);
    }
  };
};

export { limitFunctionCallCount };
