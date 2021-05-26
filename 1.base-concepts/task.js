'use strict';

function solveEquation(a, b, c) {
  let arr = [];

  let discriminantis = (b ** 2) - (4 * a * c);
  let denominator = 2 * a;
  let parametr = (-(b));

  if (discriminantis > 0) {
    let rootOfDiscriminantis = Math.sqrt(discriminantis);
    let valueOne = (parametr + rootOfDiscriminantis) / denominator;
    let valueTwo = (parametr - rootOfDiscriminantis) / denominator;

    arr.push(valueOne, valueTwo);
  } else if (discriminantis === 0) {
    let value = parametr / denominator;

    arr.push(value);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
