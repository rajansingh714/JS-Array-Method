//  Find the first course that has at least one student with all marks above 90 in all subjects

const courses = [
  {
    title: "Maths",
    students: [
      { name: "Rita", marks: { algebra: 85, geometry: 92 } },
      { name: "Sam", marks: { algebra: 95, geometry: 96 } }
    ]
  },
  {
    title: "Physics",
    students: [
      { name: "Aryan", marks: { mechanics: 91, optics: 93, thermo: 90 } }
    ]
  },
];

const result = courses.find(course =>
  course.students.some(student =>
    Object.values(student.marks).every(mark => mark > 90)
  )
);

console.log(result); // Physics
