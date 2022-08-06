// Calculator functions

function add(a, b) { return a + b;}

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

// Display
const display = calculator.querySelector('#display');

const DISPLAY_LENGTH = 13;

// Button funcionality
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
}

init();