//Create functions for operators

function muliplyNumbers(a, b) {
  return parseInt(a) * parseInt(b);
}

function divideNumbers(a, b) {
  return parseInt(a) / parseInt(b).toFixed(2);
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
      return muliplyNumbers(firstNumber, secondNumber);
    case '/':
      return divideNumbers(firstNumber, secondNumber);
  }
}

// create reference to be able to make events for buttons and display
const buttons = document.querySelectorAll('.Btn-number');

const opbuttons = document.querySelectorAll('.Btn-operator');

const display = document.querySelector('.Display');

const equals = document.querySelector('.Btn-equals');

const clear = document.querySelector('#clear');

const decimcal = document.querySelector('#decimal');

// add event listener for button selections depending on if operator is undefined or present

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-num');
    if (operator === '') {
      firstNumber += buttonValue;
      display.textContent = firstNumber;
    } else {
      secondNumber += buttonValue;
      display.textContent = secondNumber;
    }
  })
);

// add event listener for operator being selected
opbuttons.forEach((opbutton) =>
  opbutton.addEventListener('click', () => {
    if (result === '') {
      const buttonValue = opbutton.getAttribute('data-num');
      operator += buttonValue;
      display.textContent = operator;
    } else {
      const buttonValue = opbutton.getAttribute('data-num');
      operator = '';
      operator += buttonValue;
      display.textContent = operator;
    }
  })
);

equals.addEventListener('click', () => {
  if (firstNumber === '' && secondNumber === '') {
    display.textContent = '';
  } else if (firstNumber != '' && secondNumber === '') {
    display.textContent = firstNumber;
  } else if (result === '') {
    const equalValue = operate(firstNumber, secondNumber, operator);
    result += equalValue;
    display.textContent = result;
    firstNumber = result;
    operator = '';
    secondNumber = '';
  } else {
    result = '';
    const equalValue = operate(firstNumber, secondNumber, operator);
    result += equalValue;
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
  }
});

clear.addEventListener('click', () => {
  result = '';
  operator = '';
  secondNumber = '';
  firstNumber = '';
  display.textContent = '';
});
