// Keep only words that start with "a"
const names = ["rajan", "amit", "anita", "neha"];

const firstChar = names.filter((name) => {
  if (name[0] === "a") return name;
});

console.log(firstChar);
