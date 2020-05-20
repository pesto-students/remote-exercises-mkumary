
function duplicateLetters(string = '') {
  let map = new Map();
  string.split('').forEach(letter => { 
    let letterCount = map.get(letter);
    if (letterCount) {
      map.set(letter, letterCount + 1)
    } else { 
      map.set(letter, 1)
    }
  })
  let duplicateCounts = [...map.values()].filter(count => count > 1);
  return  duplicateCounts.length ? Math.max(...duplicateCounts) : false;
}

export {
  duplicateLetters,
};
