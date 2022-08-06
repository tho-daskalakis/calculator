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
console.log(calculator);

const display = calculator.querySelector('#display');
console.log(display);

const buttons = [...calculator.querySelectorAll('#buttons button')];
console.log(buttons);

// Button funcionality

buttons.forEach(button => button.addEventListener('click', e => {
    display.textContent = e.target.textContent;
}));
