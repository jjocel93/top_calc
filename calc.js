// Operator functions
const multiplyNumbers = (a, b) => parseFloat(a) * parseFloat(b);

const divideNumbers = (a, b) => {
  if (b === '0') {
    return 'That is not possible stuipd head';
  }
  return (parseFloat(a) / parseFloat(b)).toFixed(2);
};

const addNumbers = (a, b) => parseFloat(a) + parseFloat(b);

const subtractNumbers = (a, b) => parseFloat(a) - parseFloat(b);

// Function to operate based on the operator
const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return addNumbers(a, b);
    case '-':
      return subtractNumbers(a, b);
    case '*':
      return multiplyNumbers(a, b);
    case '/':
      return divideNumbers(a, b);
    default:
      return null;
  }
};

// Variables for the calculator state
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';
let decimalAdded = false; // Track if decimal has been added

// DOM element references
const buttons = document.querySelectorAll('.Btn-number');
const opbuttons = document.querySelectorAll('.Btn-operator');
const display = document.querySelector('.Display');
const equals = document.querySelector('.Btn-equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');

// Helper function to update the display
const updateDisplay = (value) => {
  display.textContent = value;
};

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
    }
  })
);

// Event listener for operator buttons
opbuttons.forEach((opbutton) =>
  opbutton.addEventListener('click', () => {
    if (!firstNumber) return;
    operator = opbutton.getAttribute('data-num');
    updateDisplay(operator);
    result = '';
    decimalAdded = false; // Reset decimal flag when operator is clicked
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
  decimalAdded = result.toString().includes('.'); // Convert result to string before checking for decimal
});

// Event listener for decimal button
decimal.addEventListener('click', () => {
  if (!decimalAdded) {
    if (!operator) {
      firstNumber += '.';
      updateDisplay(firstNumber);
    } else {
      secondNumber += '.';
      updateDisplay(secondNumber);
    }
    decimalAdded = true; // Set flag once a decimal is added
  } else {
    return;
  }
});

// Event listener for clear button
clear.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  result = '';
  decimalAdded = false; // Reset decimal flag
  updateDisplay('');
});
