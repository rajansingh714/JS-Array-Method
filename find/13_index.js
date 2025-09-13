// Find the first student who:

// is enrolled in all mandatory courses,

// has GPA > 3.5,

// and has never missed a single class in any course.

const mandatoryCourses = ["Math", "Physics", "English"];

const students = [
  {
    name: "Ravi",
    GPA: 3.9,
    courses: {
      Math: { attended: 30, total: 30 },
      Physics: { attended: 29, total: 30 },
      English: { attended: 30, total: 30 }
    }
  },
  {
    name: "Asha",
    GPA: 3.6,
    courses: {
      Math: { attended: 30, total: 30 },
      Physics: { attended: 30, total: 30 },
      English: { attended: 30, total: 30 }
    }
  },
  {
    name: "Rina",
    GPA: 3.2,
    courses: {
      Math: { attended: 30, total: 30 },
      English: { attended: 30, total: 30 }
    }
  }
];

const result = students.find(student => 
  student.GPA > 3.5 &&
  mandatoryCourses.every(course => student.courses.hasOwnProperty(course)) &&
  Object.values(student.courses).every(c => c.attended === c.total)
);

console.log(result?.name); // Asha ✅


