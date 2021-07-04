function cachingDecoratorNew(func) {
  let cash = [];

  function wrapper(...args) {
    const hash = args.join(' , ');
    let idx = cash.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
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


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let flag = false;
  let lastArgs;
  let timer;

  function wrapper(...args) {
    if (!flag) {
      func(...args);
      flag = true;
    }

    clearTimeout(timer);
    lastArgs = args;
    timer = setTimeout(() => {
      func(...args);
    }, ms)
  }

  return wrapper;
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let flag = false;
  let lastArgs;
  let timer;
  let count = 0;

  function wrapper(...args) {
    if (!flag) {
      func(...args);
      flag = true;
    }

    count += 1;
    clearTimeout(timer);
    lastArgs = args;
    timer = setTimeout(() => {
      func(...args);

    }, ms)

  }
  wrapper.count = [count];
  return wrapper;
}
}
