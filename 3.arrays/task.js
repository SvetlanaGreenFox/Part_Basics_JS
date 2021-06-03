//Задание 1
function compareArrays(arr1, arr2) {
  let result = arr1.every(isIdentical);

  function isIdentical {
    if (arr1.length === arr2.length) {
      return item === arr2[idx];
    }
  }

  return result; // boolean
}


//Задание 2
function advancedFilter(arr) {

  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0);

  resultArr = resultArr.map(item => item * 10);

  return resultArr; // array
}
