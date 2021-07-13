function cachingDecoratorNew(func) {
  let cash = [];

  function wrapper(...args) {
    const hash = args.join(' , ');
    let idx = cash.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      return "Из кэша: " + cash[idx].result;
    }
    const result = func(...args);
    cash.push({ hash, result });
    if (cash.length > 5) {
      cash.shift();
    }

    console.log(cash);
    return `Вычисляем: ${result}`;

  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let flag = false;

  function wrapper(...args) {
    if (!flag) {
      func(...args);
      flag = true;
    }

    let timer = setTimeout(() => {
      flag = false;
    }, ms)
  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  // Ваш код
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {

    if (!flag) {
      func(...args);
      wrapper.count++;
      flag = true;
    }

    let timer = setTimeout(() => {
      flag = false;
    }, ms)


  }

  return wrapper;
}
