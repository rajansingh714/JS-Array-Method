const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

const str = "hello";
const chars = [...str];
console.log(chars);
