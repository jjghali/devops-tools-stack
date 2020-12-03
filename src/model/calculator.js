class Calculator {
    constructor() {

    }

    sum(firstNumber, secondNumber) {
        if (firstNumber && secondNumber) {
            return firstNumber + secondNumber;
        }
        return null;
    }
    diff(firstNumber, secondNumber) {
        if (firstNumber && secondNumber) {
            return firstNumber - secondNumber;
        }
        return null;
    }
}
module.exports = Calculator;