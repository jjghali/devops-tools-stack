var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("this is a basic REST API calculator.")
});

router.post('/sum', function (req, res, next) {
  let firstNumber = req.body.firstNumber;
  let secondNumber = req.body.secondNumber;
  if (firstNumber && secondNumber) {
    let result = firstNumber + secondNumber;
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
  if (firstNumber && secondNumber) {
    let result = firstNumber - secondNumber;
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
