// Used to copy or expand arrays/objects.

// Example Array Spread
// Copy or merge
// Syntax --> { ...obj } OR [...arr]

// Expanding arrays: It can be used to copy arrays, concatenate arrays, or insert elements into arrays at any position.

const arr = [1, 2, 3, 4, 5];

const arr1 = [...arr, 6, 7, 8, 9, 10];

console.log(arr1);

// Example Obj Spread

const obj = {
  name: "Rajan",
  profession: "Teacher",
};

const obj1 = { ...obj, age: 28 };

console.log(obj1);

const person = { name: "Rajan", age: 25, country: "India" };
const { ...rest } = person;

// console.log(name); // 'Rajan'
console.log(rest); // { age: 25, country: 'India' }
