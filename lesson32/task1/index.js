const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay("14", 2000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0)
    .catch(new Error("Can't calculate"));
const asyncSum = (...asyncNums) =>
  Promise.all(asyncNums).then((numbers) => getSum(numbers));
asyncSum(asyncNum1, asyncNum2, asyncNum3).then((result) => console.log(result));
