// Find the first employee who worked more than 5 hours on a weekend

const employees = [
  {
    name: "Asha",
    attendance: [
      { date: "2025-06-02", hours: 8 }, // Monday
      { date: "2025-06-01", hours: 4 }, // Sunday
    ]
  },
  {
    name: "Manoj",
    attendance: [
      { date: "2025-06-01", hours: 6 }, // Sunday
      { date: "2025-06-03", hours: 9 }
    ]
  },
];

const result = employees.find(emp =>
  emp.attendance.some(log => {
    const day = new Date(log.date).getDay(); // 0 = Sunday, 6 = Saturday
    return (day === 0 || day === 6) && log.hours > 5;
  })
);

console.log(result); // Manoj
