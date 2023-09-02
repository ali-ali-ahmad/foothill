// import calc from './functions.js';

let number;
let array = [];

function numberEntry(value) {

    if (!number) {
        number = value;
        array.push(number);
    } else {
        number = number + value.toString();
        array[array.length - 1] = parseFloat(number);
    }

    operatortionDisplay();

}


function methodEntry(value) {

    const lastItem = array[array.length - 1];


    if (!array.length) {
        return
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
        return
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


// export default {
//     clearInput,
//     results,
//     methodEntry,
//     numberEntry
// }