// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 45, 78, 99, 23];

const totalPrices = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(totalPrices); // toFixed method gives an decimal places value
console.log(prices);

const grades = [75, 88, 95, 90, 80, 88];
const maxim = grades.reduce((accum, val) => {
  return Math.max(accum, val);
});

console.log("Maximum marks is ", maxim);

const ages = [12, 75, 67, 23, 22];
const minimAge = ages.reduce((accum, val) => {
  return Math.min(accum, val);
});

console.log("minimum Age will be ", minimAge);
