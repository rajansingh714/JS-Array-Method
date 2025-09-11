const numbers = [3, 4, 5, 6];
const results = numbers.map((n) => {
  return n * 2;
});

console.log({ results });
console.log({ numbers });

const users = [
  { firstName: "krishna", Home: "vrindavan" },
  { firstName: "rajan", Home: "bihar" },
];

const fullName = users.map((user) => {
  return `${user.firstName} -> ${user.Home}`;
});

console.log({ fullName });
console.log({ users });
