// Given an array of projects, find the first project where:

// 1) Every team has exactly 4 members
// 2) At least one team has all members with experience > 5 years
// 3) The deadline is within 3 months from today


const projects = [
  {
    name: "Alpha",
    deadline: "2025-10-01",
    teams: [
      {
        name: "Backend",
        members: [
          { name: "Ravi", experience: 6 },
          { name: "Sam", experience: 7 },
          { name: "Neha", experience: 5 },
          { name: "Ali", experience: 4 }
        ]
      },
      {
        name: "Frontend",
        members: [
          { name: "Sara", experience: 6 },
          { name: "John", experience: 6 },
          { name: "Anu", experience: 6 },
          { name: "Tom", experience: 6 }
        ]
      }
    ]
  },
  {
    name: "Beta",
    deadline: "2025-08-15",
    teams: [
      {
        name: "Core",
        members: [
          { name: "Asha", experience: 6 },
          { name: "Manav", experience: 8 },
          { name: "Priya", experience: 7 },
          { name: "Kiran", experience: 6 }
        ]
      },
      {
        name: "Support",
        members: [
          { name: "Rina", experience: 4 },
          { name: "Kabir", experience: 5 },
          { name: "Tina", experience: 3 },
          { name: "Ajay", experience: 2 }
        ]
      }
    ]
  },
  {
    name: "Gamma",
    deadline: "2025-07-30",
    teams: [
      {
        name: "DevOps",
        members: [
          { name: "Liam", experience: 6 },
          { name: "Noah", experience: 6 },
          { name: "Emma", experience: 6 },
          { name: "Olivia", experience: 6 }
        ]
      },
      {
        name: "QA",
        members: [
          { name: "Ava", experience: 6 },
          { name: "Mia", experience: 6 },
          { name: "Sophia", experience: 6 },
          { name: "Isabella", experience: 6 }
        ]
      }
    ]
  }
];

const today = new Date();
const threeMonthsLater = new Date();
threeMonthsLater.setMonth(today.getMonth() + 3);

const result = projects.find(project =>
  new Date(project.deadline) <= threeMonthsLater &&
  project.teams.every(team => team.members.length === 4) &&
  project.teams.some(team =>
    team.members.every(member => member.experience > 5)
  )
);

console.log(result?.name); // Gamma ✅
