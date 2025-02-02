/*
const utility = require("./Utility") // imports everything

let result = utility.square(9)
console.log(result);

result = utility.cube(3)
console.log(result);

result = utility.calculate(10, 20, "+")
console.log(result);
*/

const { calculate, square } = require("./Utility") // imports only the specific functions
let result = calculate(10,5,"-");
console.log(result);

result = square(9);
console.log(result);