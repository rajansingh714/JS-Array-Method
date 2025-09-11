// Add a new property to each object

const employees = [
  { name: "rajan" },
  { name: "singh" },
  { name: "prience" },
  { name: "priyanshu" },
];

const addedPropery = employees.map((elem) => {
  return {
    ...elem,
    isActive: true,
  };
});

console.log(addedPropery);

const people = [
  { firstName: "rajan", lashtName: "sharma" },
  { firstName: "aman", lastName: "singh" },
];

const names = people.map((ele) => {
  return ele.firstName;
});
console.log(names);
