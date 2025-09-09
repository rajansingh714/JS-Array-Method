// slice method for extract from array it contains two argument . and two arguments is optional

// slice(start, stop); 
// when we will slice to an array if start argument is not do that to slice then definetyly it takes undefined;


const fruitName = ["banana", "mango", "pineApple", "apple"];

const cloneFruiteNmae = fruitName.slice();

console.log({fruitName});
console.log({cloneFruiteNmae});


const numbers = [34, 55, 1990, 3423, 98, 123];
const copyNumbers = numbers.slice(2);

console.log({ copyNumbers });

