// Create functions for operators
function multiplyNumbers(a, b) {
  return parseInt(a) * parseInt(b);
}

function divideNumbers(a, b) {
  return (parseInt(a) / parseInt(b)).toFixed(2);
}

function addNumbers(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtractNumbers(a, b) {
  return parseInt(a) - parseInt(b);
}

// Create a variable for the first number, the operator, and the second number
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return addNumbers(firstNumber, secondNumber);
    case '-':
      return subtractNumbers(firstNumber, secondNumber);
    case '*':
      return multiplyNumbers(firstNumber, secondNumber);
    case '/':
      return divideNumbers(firstNumber, secondNumber);
    default:
      return null;
  }
}

// Create references to buttons and display
const buttons = document.querySelectorAll('.Btn-number');
const opbuttons = document.querySelectorAll('.Btn-operator');
const display = document.querySelector('.Display');
const equals = document.querySelector('.Btn-equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');

// Helper function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Event listener for number buttons
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-num');
    if (!result) {
      if (!operator) {
        firstNumber += buttonValue;
        updateDisplay(firstNumber);
      } else {
        secondNumber += buttonValue;
        updateDisplay(secondNumber);
      }
    } else return;
  })
);

// Event listener for operator buttons
opbuttons.forEach((opbutton) =>
  opbutton.addEventListener('click', () => {
    if (!firstNumber) return;
    operator = opbutton.getAttribute('data-num');
    updateDisplay(operator);
    result = '';
  })
);

// Event listener for equals button
equals.addEventListener('click', () => {
  if (!firstNumber || !secondNumber) return;
  result = operate(firstNumber, secondNumber, operator);
  updateDisplay(result);
  firstNumber = result;
  operator = '';
  secondNumber = '';
});

// Event listener for clear button
clear.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  result = '';
  updateDisplay('');
});

// Event listener for decimal button

// decimal.addEventListener("click", () => {
//     if(decimal)
// })
