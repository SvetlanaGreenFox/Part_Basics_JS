function cachingDecoratorNew(func) {
  let cash = [];

  function wrapper(...args) {
    const hash = args.join(' , '); // получаем правильный хэш
    let idx = cash.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
      console.log("Из кэша: " + cash[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cash[idx].result;
    } else {
      const result = func(...args);
      cash.push({ hash, result });
      if (cash.length > 5) {
        cash.shift();
      }

      console.log(cash);
      return `Вычисляем: ${result}`;
    }
  }

  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
