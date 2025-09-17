const numbers = [33, 44, 22, 55, 67, 71];

const result = numbers.every((n) => {
  return n > 20;
});

console.log({ result });

const emptyArray = [];
const resultEmpty = emptyArray.every((n) => n > 0);
console.log(resultEmpty);
