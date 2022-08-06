// Calculator functions

function add(a, b) { return parseFloat(a) + parseFloat(b);}

function subtract(a, b) { return a - b;}

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        }
}


// Calculator
const calculator = document.querySelector('#calculator');

let cachedNumber = null;


// Display
const display = calculator.querySelector('#display');

const DISPLAY_LENGTH = 13;

const cachedDisplay = calculator.querySelector('#cached');

function updateCached(value) {
    cachedDisplay.textContent = value;
}

// Button funcionality

// Clear
const clear = calculator.querySelector('#clear');

clear.addEventListener('click', e => {
    display.textContent = '0';
});

// Dot
const dot = calculator.querySelector('#dot');

dot.addEventListener('click', e => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});

// Operations
const operators = [...calculator.querySelectorAll('.operator')];

let operator = null;

operators.forEach(oper => oper.addEventListener('click', e => {
    if (display.textContent !== '0') {
        operator = e.target.textContent;
        
        cachedNumber = display.textContent;

        updateCached(cachedNumber + operator);

        display.textContent = '0';
    }
}));

// Equals
const equals = calculator.querySelector('#equals');

equals.addEventListener('click', e => {
    if (operator !== null) {
        display.textContent = 
            operate(operator, cachedNumber, display.textContent);
        reset();
        }
    });

// Digits
const digits = [...calculator.querySelectorAll('#buttons button.digit')];

digits.forEach(digit => digit.addEventListener('click', e => {
    if (display.textContent === '0') {
        display.textContent = '';
    }

    if (display.textContent.length === DISPLAY_LENGTH) {
        return;
    }

    display.textContent += e.target.textContent;
}));

// Initialization

function init() {
    display.textContent = '0';
    cachedDisplay.textContent = '0';
    operator = null;
}

init();

// Reset after equals

function reset() {
    operator = null;
    cachedNumber = 0;
    cachedDisplay.textContent = cachedNumber;
}
