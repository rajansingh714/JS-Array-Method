// Find maximum value

const nums = [10, 50, 20, 70, 40];

const max = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, nums[0]);

console.log(max);
