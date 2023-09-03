const calc = require('../operations')

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
