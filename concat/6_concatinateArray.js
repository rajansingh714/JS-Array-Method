// Concatenate an array of arrays into a single array

const arrays = [[1], [2, 3], [4, 5], [6]];

const result = [].concat(...arrays);

console.log(result);
// [1, 2, 3, 4, 5, 6]
