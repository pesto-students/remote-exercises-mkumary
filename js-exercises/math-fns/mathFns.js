// Don't change the export values.
// You can use the function in the Math module
const sqrt = Math.sqrt.bind(this);
const power = Math.pow.bind(this);
const round = Math.round.bind(this);

export { sqrt, power, round };
