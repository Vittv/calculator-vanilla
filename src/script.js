// Initial operation values
let firstNumber = 0;
let operator;
let secondNumber;

// Basic operations
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtractTwoNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiplyTwoNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divideTwoNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};

// Operating function
function operateNumbers(operator, firstNumber, secondNumber) {
    if (operator == "+") {
       return addTwoNumbers(firstNumber, secondNumber)
    }
    else if (operator == "-") {
       return subtractTwoNumbers(firstNumber, secondNumber) 
    }
    else if (operator == "*") {
       return multiplyTwoNumbers(firstNumber, secondNumber)
    }
    else if (operator == "/") {
       return divideTwoNumbers(firstNumber, secondNumber)
    }
};

// Event listeners
/* const numberButtons = document.querySelectorAll(".number");
numberButtons.addEventListener("click", () => display.textContent = numberButtons.textContent); */

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const operationTop = document.querySelector(".operation");
const displayBottom = document.querySelector(".display");
const clearButton = document.querySelector(".btn-clear");

let isTypingNewNumber = false;

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (isTypingNewNumber) {
            displayBottom.textContent = ""; // Clear the bottom for new input
            isTypingNewNumber = false;
        }
        displayBottom.textContent += button.textContent; // Appends to the bottom
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayBottom.textContent !== "") {
            operationTop.textContent = displayBottom.textContent + " " + button.textContent;
            isTypingNewNumber = true; // Prepare for new number input
        }      
    });
});

clearButton.addEventListener("click", () => {
    operationTop.textContent = "";
    displayBottom.textContent = "";
    isTypingNewNumber = false; // Reset
});

