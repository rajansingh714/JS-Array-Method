const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log("first:", first);
console.log("second", second);
console.log("rest: ", rest);
