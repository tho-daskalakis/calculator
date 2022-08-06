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
    init();
});

// Dot
const dot = calculator.querySelector('#dot');

dot.addEventListener('click', e => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});

// DEL

const del = calculator.querySelector('#del');

del.addEventListener('click', e => {
    const currentNumber = display.textContent;

    if (currentNumber === '0') {
        return;
    }

    if (currentNumber.length === 1) {
        display.textContent = '0';
        return;
    }

    const length = display.textContent.length;

    display.textContent = display.textContent.slice(0, length - 1);
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
        const currentNumber = parseFloat(display.textContent);
        const result = operate(operator, cachedNumber, currentNumber);

        if (result.toString().length < 13) {
            display.textContent = result;
        }
        else {
            display.textContent = result.toFixed(10);
        }

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
    cachedNumber = 0;
    operator = null;
}

init();

// Reset after equals

function reset() {
    operator = null;
    cachedNumber = 0;
    cachedDisplay.textContent = cachedNumber;
}
