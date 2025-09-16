const users = [
  { name: "Ravi", isActive: true },
  { name: "Sita", isActive: false },
  { name: "Aman", isActive: true },
];

// 1. Get All Active Users

const acitiveUser = users.filter((user) => {
  return user.isActive;
});

console.log("activeUser", acitiveUser);

// 2. Number Of ActiveUser

const countActiveUser = acitiveUser.length;
console.log("count active user", countActiveUser);
