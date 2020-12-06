const nock = require("nock");
const Calculator = require("../../src/model/calculator")

let calculator = null;
describe("Calculator", () => {
    beforeEach(() => {
        calculator = new Calculator();
    })

    describe('sum', () => {
        test("the sum of two numbers is 6", () => {
            const firstNumber = 3;
            const secondNumber = 3;
            const expected = 4;
            const result = calculator.sum(firstNumber, secondNumber)
            expect(result).toEqual(expected)
        })
        test("the result is invalid because of missing firstNumber", () => {
            const firstNumber = null;
            const secondNumber = 3;
            const result = calculator.sum(firstNumber, secondNumber)
            expect(result).toBeNull()
        })
    });

    describe('diff', () => {
        test("the diff of two numbers is 2", () => {
            const firstNumber = 6;
            const secondNumber = 4;
            const expected = 2;
            const result = calculator.diff(firstNumber, secondNumber)
            expect(result).toEqual(expected)
        })

        test("the diff of two numbers is -2", () => {
            const firstNumber = 4;
            const secondNumber = 6;
            const expected = -2;
            const result = calculator.diff(firstNumber, secondNumber)
            expect(result).toEqual(expected)
        })

        test("the result is invalid because of missing firstNumber", () => {
            const firstNumber = null;
            const secondNumber = 3;

            const result = calculator.diff(firstNumber, secondNumber)
            expect(result).toBeNull()
        })
    });
})