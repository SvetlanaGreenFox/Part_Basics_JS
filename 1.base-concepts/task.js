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
  let percentCredit = Number(percent / 100);
  let contributionCredit = Number(contribution);
  let amountCredit = Number(amount);

  let creditPeriod = numberMonths(date);
  let p = percentCredit / 12;

  let bodyCredit = amountCredit - contributionCredit;
  let creditPayment = bodyCredit * (p + p / (((1 + p) ** creditPeriod) - 1));
  // totalAmount = (contributionCredit + (creditPayment * creditPeriod)).toFixed(2));

  let freeAmount = amountCredit / creditPeriod;
  let freePercent = creditPayment - freeAmount;
  let allPercent = freePercent * creditPeriod;

  totalAmount = Number((amountCredit + allPercent).toFixed(2));

  console.log(totalAmount);
  return totalAmount;
}

function numberMonths(date) {
  let now = new Date();
  let finishCredit = new Date(date);
  let fullYear = 12 * (finishCredit.getFullYear() - now.getFullYear());
  let numberMonths = finishCredit.getMonth() - now.getMonth() + fullYear;

  return numberMonths;
}
