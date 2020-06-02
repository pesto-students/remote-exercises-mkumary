function longestWordInString(string) {
  let longestWord;
  let longestWordLength = 0
  string.split(' ').forEach(word => { 
    if (word.length > longestWordLength) { 
      longestWordLength = word.length;
      longestWord = word;
    }
  })  
  return longestWord
}

export { longestWordInString };
