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
