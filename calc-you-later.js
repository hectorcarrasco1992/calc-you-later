const calculate = require('./calculate')

let num =process.argv[2]
let num1 =process.argv[3]
let operation = process.argv[4] 

console.log(calculate(num,operation,num1))