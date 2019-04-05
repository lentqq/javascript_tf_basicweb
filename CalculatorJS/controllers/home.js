const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;
        let calculatorParams = calculatorBody['calculator'];
        let calculator = new Calculator();
        calculator.firstNumber = Number(calculatorParams.firstNumber);
        calculator.operator = calculatorParams.operator;
        calculator.secondNumber = Number(calculatorParams.secondNumber);
        let finalResult = calculator.result();
        res.render('home/index', {'calculator':calculator, 'finalResult':finalResult});
    }
};