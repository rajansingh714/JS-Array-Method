// Keep only objects where isActive: true

const users = [
  { name: "Rajan", isActive: true },
  { name: "Amit", isActive: false },
  { name: "suman", isActive: true },
];

const result = users.filter((user) => {
  if (user.isActive) return user;
});

console.log(result);
