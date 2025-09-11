const names = [
  { name: "rajan", age: 25 },
  { name: "singh", age: 28 },
  { name: "krishna", age: 100 },
  { name: "prience", age: 20 },
];

names
  .filter((c) => c.age > 25)
  .map((c) => c.name)
  .forEach((c) => console.log(c));
