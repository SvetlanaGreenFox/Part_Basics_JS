function cachingDecoratorNew(func) {
  // Ваш код
  let cash = [];

  function wrapper(...args) {
    const hash = args.join(' , ');

    if (hash in cash) {
      return `вернуть из кэша:${cash[hash]}`;
    } else {
      const result = func(...args);
      console.log(result);

      cash.push({ hash, result });
      if (cash.length === 5) {
        cash.shift();
      }

      console.log(cash);
      return `вычисляем:${result}`;
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
