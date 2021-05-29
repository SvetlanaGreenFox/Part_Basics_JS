'use strict';

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [- b / (2 * a)];
  }
  return [];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //Проверка данных

  const parametrs = [
    ['Процентная ставка', percent],
    ['Первоначальный взнос', contribution],
    ['Сумма кредита', amount]
  ];

  for (let i = 0; i < parametrs.length; i++) {

    const arr = parametrs[i];
    const nameParametr = arr[0];
    const valueParametr = arr[1];

    if (isNaN(valueParametr)) {
      return `Параметр ${nameParametr} содержит неправильное значение ${valueParametr}`;
    }
  }

  let percentCredit = (percent) / 100;
  let creditPeriod = numberMonths(date);

  //Конец Проверки

  let p = percentCredit / 12;

  let bodyCredit = amount - contribution;
  let creditPayment = bodyCredit * (p + p / (((1 + p) ** creditPeriod) - 1));

  let allPercent = (creditPayment - (amount / creditPeriod)) * creditPeriod;

  totalAmount = Number((amount + allPercent).toFixed(2));

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
