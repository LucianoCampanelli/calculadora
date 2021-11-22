

let suma = require("./sumar")
let dividir = require("./dividir")
let restar = require("./resta")
let multiplicar = require("./multiplicar")
const prompt = require('prompt-sync')();
// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
   result = suma( number1 , number2);
}
else if (operator == '-') {
    result = restar(number1, number2);
}
else if (operator == '*') {
    result = multiplicar(number1, number2);
}
else {
    result =dividir(number1, number2);
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`)