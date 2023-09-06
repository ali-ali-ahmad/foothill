const { calc, numberEntry, methodEntry, results, clearInput, getNumber, getArray, setNumber, setArray } = require("../calculator");
const { JSDOM } = require('jsdom');

describe("Calculator", () => {
    // Test case: Addition
    it("should return the correct sum of two numbers", () => {
        expect(calc(2, "+", 3)).toBe(5);
    });

    // Test case: Subtraction
    it("should return the correct difference of two numbers", () => {
        expect(calc(5, "-", 2)).toBe(3);
    });

    // Test case: Multiplication
    it("should return the correct product of two numbers", () => {
        expect(calc(4, "*", 6)).toBe(24);
    });

    // Test case: Division
    it("should return the correct quotient of two numbers", () => {
        expect(calc(10, "/", 2)).toBe(5);
    });

    // Test case: Division by zero
    it("should throw an error when dividing by zero", () => {
        expect(() => calc(6, "/", 0)).toThrow("Division by zero.");
    });

    // Test case: Negative numbers
    it("should handle negative numbers correctly", () => {
        expect(calc(-8, "+", 5)).toBe(-3);
    });

    // Test case: Decimal numbers
    it("should handle decimal numbers correctly", () => {
        expect(calc(3.5, "*", 2)).toBe(7);
    });

    // Test case: Order of operations
    it("should follow the correct order of operations", () => {
        expect(calc(2, "+", 3, "*", 4)).toBe(14);
    });

    // Test case: Invalid operator
    it("should throw an error for an invalid operator", () => {
        expect(() => calc(5, "$", 3)).toThrow("Invalid operator.");
    });

    // Test case: Invalid input type
    it("should throw an error for invalid input types", () => {
        expect(() => calc("2", "+", 3)).toThrow("Invalid input type.");
    });

    // Test case: Input bigger than 1000
    it("Should Ignore the numbers bigger than 1000", () => {
        expect(calc(1002, "+", 5, "-", 2000, "*", 4)).toBe(1);
    });

    // Test case: Input bigger than 1000
    it("Should Ignore the numbers bigger than 1000", () => {
        expect(calc(5, "+", 1002)).toBe(5);
    });

    // Test case: first or last input is not a number
    it("Should Ignore the Operator if its in the first or last", () => {
        expect(calc("+", 5, "+", 5, "*", 4, "/")).toBe(25);
    });

    // Test case: Decimal calculation
    it("Should calculate decimal numbers", () => {
        expect(calc(5.4, "+", 5.2, "*", 4.5, "/", 2)).toBe(17.1);
    });

    // Test case: Handle an unknown amount of numbers.
    it("Should calculate unknown amount of numbers", () => {
        expect(calc(5, "+", 10, "*", 4.5, "/", 2, "*", 5, "-", 3)).toBe(6.5);
    });

    // Test case: more than one Operator after each other
    it("should remove the previous Operator if two are exists after each others", () => {
        expect(calc(5, "+", "-", 3)).toBe(2);
    });

    // Test case: two numbers after each other
    it("should throw an error for two numbers after each other", () => {
        expect(() => calc(5, 5, "-", 3)).toThrow("Invalid input type, two numbers with no Operator.");
    });
});




describe('Calculator Inputs', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM('<!DOCTYPE html><html><body><div id="operatortion_screen"></div><div id="result_screen"></div></body></html>');
        document = dom.window.document;
        global.document = document;
    });

    afterEach(() => {
        setNumber(null);
        setArray([]);
    });

    // // Test case: number entry
    it("numberEntry should add 1 number to the array", () => {
        numberEntry(1);
        const number = getNumber();
        const array = getArray(); 
        expect(number).toBe('1');
        expect(array).toEqual([1]);
    });

    // // Test case: two numbers entry
    it("numberEntry should add 2 numbers to the array", () => {
        numberEntry(1);
        numberEntry(2);
        const number = getNumber();
        const array = getArray(); 
        expect(number).toBe('12');
        expect(array).toEqual([12]);
    });

    // Test case: decimal numbers entry
    it("numberEntry should add a decimal number to the array", () => {
        numberEntry(1);
        numberEntry('.');
        numberEntry(2);
        const number = getNumber();
        const array = getArray(); 
        expect(number).toBe("1.2");
        expect(array).toEqual([1.2]);
    });

    // Test case: Operation method entry only
    it("methodEntry should not add an operation method to the array without a number", () => {
        expect(() => methodEntry('-')).toThrow("Cant add a Method without a number.");
    });

    // Test case: Two Operation method entry only
    it("methodEntry should replace the second method with the first", () => {
        numberEntry(1);
        methodEntry('*');
        methodEntry('/');
        const array = getArray(); 
        expect(array).toEqual([1, '/']);
    });

    // Test case: number + Operation method entry
    it("numberEntry + methodEntry should add a number + operation method to the array", () => {
        numberEntry(1);
        methodEntry('*');
        const array = getArray(); 
        expect(array).toEqual([1, '*']);
    });

    // Test case: number + Operation method + number entry
    it("numberEntry + methodEntry + numberEntry should be added to the array", () => {
        numberEntry(2);
        numberEntry(1);
        methodEntry('/');
        numberEntry(2);
        const array = getArray(); 
        expect(array).toEqual([21, '/', 2]);
    });

    // Test case: array length is less than 3
    it("result should throw an error when the array length is less than 3", () => {
        numberEntry(1);
        numberEntry(3);
        methodEntry('-');
        expect(() => results()).toThrow("Array lenght should be at least 3 to make an operation.");
    });

    // Test case: number + Operation method + result entry
    it("numberEntry + methodEntry + numberEntry + result should return the operation value", () => {
        numberEntry(1);
        numberEntry(3);
        methodEntry('+');
        numberEntry(5);
        results();
        const array = getArray(); 
        expect(array).toEqual([18]);
    });

    // Test case: number + Operation method + number + result  + clear entry
    it("clearInput should reset screens and clear variables", () => {
        numberEntry(5);
        methodEntry('+');
        numberEntry(3);
        results();
    
        clearInput();
    
        const operatortionScreen = document.getElementById('operatortion_screen');
        const resultScreen = document.getElementById('result_screen');
        const array = getArray();
        const number = getNumber();
    
        expect(operatortionScreen.textContent).toBe('0');
        expect(resultScreen.textContent).toBe('=');
        expect(array).toEqual([]);
        expect(number).toBe(null);
    });

});
