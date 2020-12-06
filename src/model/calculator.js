class Calculator {
    constructor() {

    }

    sum(firstNumber, secondNumber) {
        if (firstNumber != null && secondNumber != null) {
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