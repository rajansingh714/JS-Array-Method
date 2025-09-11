const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squares = numbers.map((number) => {
  return number * 2;
});

// console.log({squares});
// console.log({numbers});

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "krishna", age: "infinity" },
];

const userDetails = users.map((user) => {
  const age = typeof user.age === "number" ? user.age : 0;
  return {
    fullName: user.name,
    ageInMont: user.age * 12,
  };
});

console.log(userDetails);
