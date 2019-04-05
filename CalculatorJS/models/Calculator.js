function Calculator(firstNumber, operator, secondNumber) {
    this.firstNumber = firstNumber;
    this.operator = operator;
    this.secondNumber = secondNumber;

    this.result = function () {
        let result = 0;

        switch (this.operator) {
            case '+':
            result = this.firstNumber + this.secondNumber;
            break;
            case '-':
            result = this.firstNumber - this.secondNumber;
            break;
            case '*':
            result = this.firstNumber * this.secondNumber;
            break;
            case '/':
            result = this.firstNumber / this.secondNumber;
            break;
        }

        return result;
    }
} 

module.exports = Calculator;