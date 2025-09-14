const nums = [2, 3, 4, 5];

const product = nums.reduce((acc, item) => {
  console.log(acc);
  return acc * item;
});

console.log(product);

// const maxValue = nums.reduce((acc, item) => {
//   return Math.max(acc, item);
// });

// console.log(maxValue);
