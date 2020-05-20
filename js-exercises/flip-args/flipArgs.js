
const flipArgs = fn => (...params) =>  fn(...params.reverse())
    
export { flipArgs }