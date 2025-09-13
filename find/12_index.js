// 1. Find the first company that has at least one department with exactly 3 employees where all employees:

// have email ending with .org,

// joined before 2020,

// and at least one knows TypeScript


const companies = [
  {
    name: "TechSoft",
    departments: [
      {
        name: "Engineering",
        employees: [
          { name: "Ravi", email: "ravi@tech.com", joined: "2019-05-12", skills: ["JavaScript"] },
          { name: "Sara", email: "sara@tech.org", joined: "2021-01-10", skills: ["TypeScript"] },
          { name: "Nina", email: "nina@tech.org", joined: "2019-02-01", skills: ["Python"] },
        ]
      },
      {
        name: "R&D",
        employees: [
          { name: "Leo", email: "leo@rnd.org", joined: "2018-09-21", skills: ["TypeScript", "C++"] },
          { name: "Maya", email: "maya@rnd.org", joined: "2016-06-15", skills: ["Go", "TypeScript"] },
          { name: "Ajay", email: "ajay@rnd.org", joined: "2017-03-18", skills: ["Rust"] }
        ]
      }
    ]
  },
  {
    name: "CodeNation",
    departments: [
      {
        name: "DevOps",
        employees: [
          { name: "Ankit", email: "ankit@codenation.org", joined: "2015-01-01", skills: ["Docker", "TypeScript"] },
          { name: "Rina", email: "rina@codenation.org", joined: "2014-11-01", skills: ["Kubernetes"] },
          { name: "Tina", email: "tina@codenation.org", joined: "2019-06-30", skills: ["TypeScript"] }
        ]
      }
    ]
  }
];

const result = companies.find(company =>
  company.departments.some(dept => {
    if (dept.employees.length !== 3) return false;

    const allValid = dept.employees.every(emp =>
      emp.email.endsWith(".org") &&
      new Date(emp.joined) < new Date("2020-01-01")
    );

    const hasTypeScript = dept.employees.some(emp =>
      emp.skills.includes("TypeScript")
    );

    return allValid && hasTypeScript;
  })
);

console.log(result?.name); // CodeNation ✅
