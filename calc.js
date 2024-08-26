//Create functions for operators

function muliplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

// Create a variable for the first number, the operator, and the second number

let firstNumber = '';
let operator = '';
let secondNumber = '';
let noOperator = true;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return addNumbersNumbers(firstNumber, secondNumber);
    case '-':
      return subtractNumbers(firstNumber, secondNumber);
    case '*':
      return muliplyNumbers(firstNumber, secondNumber);
    case '/':
      return divideNumbers(firstNumber, secondNumber);
  }
}

// create reference to be able to make events for buttons and display
const buttons = document.querySelectorAll('.Btn-number');

const opbuttons = document.querySelectorAll('.Btn-operator');

const display = document.querySelector('.Display');

const equals = document.querySelector('#equals');

const clear = document.querySelector('#clear');

const decimcal = document.querySelector('#decimal');

//create display variable will take display buttons that are pressed in next function

// add event listener for first buttons being selected

// buttons.forEach((button) =>
//   button.addEventListener('click', () => {
//     const buttonValue = button.getAttribute('data-num');
//     firstNumber += buttonValue;
//     display.textContent = firstNumber;
//   })
// );

// // add event listener for operator being selected
// opbuttons.forEach((opbutton) =>
//   opbutton.addEventListener('click', () => {
//     const buttonValue = opbutton.getAttribute('data-num');
//     operator += buttonValue;
//     display.textContent = operator;
//   })
// );

// let storedValue = firstNumber;
