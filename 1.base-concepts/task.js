'use strict';

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let discriminantis = Math.pow(b, 2) - (4 * a * c);

  if (discriminantis > 0) {
    let rootOfDiscriminantis = Math.sqrt(discriminantis);
    let valueOne = ((-(b)) + rootOfDiscriminantis) / (2 * a);
    let valueTwo = ((-(b)) - rootOfDiscriminantis) / (2 * a);

    return arr.push(valueOne, valueTwo);
  } else if (discriminantis === 0) {
    let value = (-(b)) / (2 * a)

    return arr.push(value);
  } else {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
