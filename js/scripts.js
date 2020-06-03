// UI Logic //

// Business Logic //

{

const add = function(number1, number2) {
  return number1 + number2;
  }

const subtract = function(number1, number2) {
  return number1 - number2;
  }

const multiply = function(number1, number2) {
  return number1 * number2;
  }

const divide = function(number1, number2) {
  return number1 / number2;
}
  
const number1 = parseInt(prompt("Enter a Number: "));
const number2 = parseInt(prompt("Enter Another Number: "));
  
alert(add(number1, number2));

}