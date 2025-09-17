// Sort this array by age (ascending):

const employees = [
  { name: "Ravi", age: 30 },
  { name: "Sita", age: 25 },
  { name: "Aman", age: 28 },
];

const sortArrayByAge = employees.sort((a, b) => {
  return a.age - b.age;
});

console.log(sortArrayByAge);
