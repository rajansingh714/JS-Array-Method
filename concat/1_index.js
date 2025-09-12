const even = [2, 4, 6];
const odd = [1, 3, 5, 7];

const result = odd.concat(even);
console.log(result);

const results = [].concat(even, odd);
console.log(results);
