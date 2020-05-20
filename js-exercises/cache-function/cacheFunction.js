const generateKeyFn = (...params) => params.join("-");
function cacheFunction(fn, generateKey = generateKeyFn) {
  let map = new Map();
  const returnFn = (...params) => {
    let keyGen = generateKey(...params);
    let result;
    if (map.has(keyGen)) {
      result = map.get(keyGen);
    } else {
      result = fn(...params);
      map.set(keyGen, result);
    }
    return result;
  };
  return returnFn;
}
export { cacheFunction };
