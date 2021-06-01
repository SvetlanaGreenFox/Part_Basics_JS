// Задание 1

function getArrayParams(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = (sum / arr.length).toFixed(2);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = +avg

  return { min: min, max: max, avg: avg };
}


// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);


  for (let i = 1; i < arrOfArr.length; i++) {

    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);

    }
  }

  return max;
}

