// Keep only even numbers

const nums = [1, 2, 3, 4, , 5, 6];

const evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);
