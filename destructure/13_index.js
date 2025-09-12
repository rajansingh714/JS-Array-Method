// REST OPERATOR

// 👉 Collects (packs) multiple values into a single array/object.
// It’s used in function parameters and destructuring.

// Use Function parameters, destructuring

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }
