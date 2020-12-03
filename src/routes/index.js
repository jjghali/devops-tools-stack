const express = require('express');
const router = express.Router();
const Calculator = require('../model/calculator')
const calculator = new Calculator();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("this is a basic REST API calculator.")
});

router.post('/sum', function (req, res, next) {
  let firstNumber = req.body.firstNumber;
  let secondNumber = req.body.secondNumber;
  let result = calculator.sum(firstNumber, secondNumber)

  if (result) {
    res.status(200).send({
      result
    })
  }
  else
    res.status(400).send({
      message: "One or both arguments are missing"
    })
});

router.post('/diff', function (req, res, next) {
  let firstNumber = req.body.firstNumber;
  let secondNumber = req.body.secondNumber;
  let result = calculator.diff(firstNumber, secondNumber)
  if (result) {
    res.status(200).send({
      result
    })
  }
  else
    res.status(400).send({
      message: "One or both arguments are missing"
    })
});

module.exports = router;
