// Used to unpack values from arrays or properties of objects into distinct variables.
// Extract values
// Syntax	{ name } = obj Or [a] = arr

const arr = [1, 2, 3, 4, 5];

const [a, b] = arr;

console.log(a, b);

const obj = {
  name: "Rajan",
  age: 28,
};

const { name, age, namee } = obj;
console.log(name, age, namee);

// when we destructure from obj then should manodatry to the key is same name then destructure proper othewise it print undefined

// or say  must should match a key
