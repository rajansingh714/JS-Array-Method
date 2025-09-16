const students = [
  { id: 1, name: "Ravi", age: 15 },
  { id: 2, name: "Sita", age: 16 },
  { id: 3, name: "Aman", age: 14 },
];

students.forEach((student) => {
  console.log("student name is ", student.name, "student age ", student.age);
});

students.push({ id: 4, name: "Pooja", age: "20" });

console.log(students);
