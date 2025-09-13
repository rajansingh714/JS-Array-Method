// Advanced Example: Find the first active user who has a verified email and at least one admin role


const users = [
  {
    id: 1,
    name: "Alice",
    isActive: false,
    email: { address: "alice@example.com", verified: true },
    roles: ["user"]
  },
  {
    id: 2,
    name: "Bob",
    isActive: true,
    email: { address: "bob@example.com", verified: false },
    roles: ["admin"]
  },
  {
    id: 3,
    name: "Charlie",
    isActive: true,
    email: { address: "charlie@example.com", verified: true },
    roles: ["admin", "moderator"]
  },
  {
    id: 4,
    name: "David",
    isActive: true,
    email: null, // Email not available
    roles: ["user"]
  }
];

const result = users.find(user => 
  user.isActive &&
  user.email?.verified === true &&
  user.roles.includes("admin")
);

console.log(result);
