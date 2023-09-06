let number;
let array = [];

function calc(...args) {
    
    const operators = ['*', '/', '-', '+'];

    function findOperator(operators) {
        for (const operator of operators) {
            if (args.includes(operator)) {
                return operator;
            }
        }
        return null;
    }

    
    if(typeof args[0] !== "number"){
        args.shift();
    } 
    if(typeof args[args.length - 1] !== "number"){
        args.pop();
    }

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== "number" && typeof args[i + 1] !== "number") {
            args.splice(i, 1);
            i--;
        }

        if (typeof args[i] === "number" && typeof args[i + 1] === "number") {
            throw new Error("Invalid input type, two numbers with no Operator.");
        }
    }

    function performOperation(operator, num1, num2) {
        if (num1 > 1000) {
            return num2;
        } else if (num2 > 1000) {
            return num1;
        }
        switch (operator) {
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    throw new Error("Division by zero.");
                }
                return num1 / num2;
            case "-":
                return num1 - num2;
            default:
                return num1 + num2;
        }
    }

    while (args.length > 1) {
        const operator = findOperator(operators);

        if (!operator) {
            throw new Error("Invalid operator.");
        }

        const operatorIndex = args.indexOf(operator);

        if (
            typeof args[operatorIndex - 1] !== "number" || 
            typeof args[operatorIndex + 1] !== "number"
        ){
            throw new Error("Invalid input type.");
        }

        const num1 = parseFloat(args[operatorIndex - 1]);
        const num2 = parseFloat(args[operatorIndex + 1]);

        const result = performOperation(operator, num1, num2);

        args.splice(operatorIndex - 1, 3, result);
    }

    return args[0];
}



function numberEntry(value) {

    if (!number) {
        number = value.toString();
        array.push(parseFloat(number));
    } else {
        number = number.toString() + value.toString();
        array[array.length - 1] = parseFloat(number);
    }

    operatortionDisplay();
}

function methodEntry(value) {

    const lastItem = array[array.length - 1];

    if (!array.length) {
        throw new Error("Cant add a Method without a number.");
    } else if (typeof lastItem !== "number") {
        array[array.length - 1] = value;
    } else {
        array.push(value);
    }
    
    number = null;

    operatortionDisplay();
}

function results() {

    if (array.length < 3) {
        throw new Error("Array lenght should be at least 3 to make an operation.");
    }

    const resultScreen = document.getElementById('result_screen');

    let results = calc(...array);
    array = [results];
    resultScreen.textContent = `= ${results}`;
    number = null;
}

function operatortionDisplay() {
    const operatortionScreen = document.getElementById('operatortion_screen');

    operatortionScreen.textContent = '';
    for (let i = 0; i < array.length; i++) {
        operatortionScreen.textContent += array[i];
    }
}

function clearInput() {
    const operatortionScreen = document.getElementById('operatortion_screen');
    const resultScreen = document.getElementById('result_screen');
    operatortionScreen.textContent = '0';
    resultScreen.textContent = '=';
    
    number = null;
    array = [];
}


function setNumber(value) {
    number = value;
}

function setArray(newArray) {
    array = newArray;
}

function getNumber() {
    return number;
}

function getArray() {
    return array;
}

module.exports = {
    calc,
    numberEntry,
    methodEntry,
    results,
    clearInput,
    setNumber,
    setArray, 
    getNumber,
    getArray,
};

// module.exports = calc;