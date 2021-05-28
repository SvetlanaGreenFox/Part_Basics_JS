'use strict';

function solveEquation(a, b, c) {
  const discriminantis = (b ** 2) - (4 * a * c);

  if (discriminant > 0) {
    return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [- b / (2 * a)];
  }
  return [];
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
