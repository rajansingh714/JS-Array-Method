// Find the first student who failed any subject (marks < 40)


const students = [
  {
    name: "Ravi",
    marks: { math: 70, english: 80, science: 60 }
  },
  {
    name: "Priya",
    marks: { math: 35, english: 90, science: 88 }
  },
  {
    name: "Aman",
    marks: { math: 45, english: 39, science: 55 }
  }
];

const result = students.find(student =>
  Object.values(student.marks).some(mark => mark < 40)
);

console.log(result); // { name: "Priya", marks: { math: 35, english: 90, science: 88 } }
