// Sum of Element

const numbers = [10, 20, 30, 40, 50];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log("Total Sum: ", sum);

// multiply by 2 in every element

const integers = [2, 3, 4, 5, 6, 7];

integers.forEach((int, idx) => {
  integers[idx] = int * 2;
});

console.log(integers);
