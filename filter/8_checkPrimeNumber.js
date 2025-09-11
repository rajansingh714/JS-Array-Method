// Keep only numbers that are prime

const nums = [2, 3, 4, 5, 6, 7, 8];

// const checkPrime = nums.filter((num) => {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) count++;
//     if (count > 2) return false;
//   }
//   if (count === 2) return true;
// });
// console.log(checkPrime);

const checkPrime = nums.filter((num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});

console.log(checkPrime);
