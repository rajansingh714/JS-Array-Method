// Sum of numbers
const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);
