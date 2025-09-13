//  Find first file with .pdf extension and size > 1MB


const files = [
  { name: "resume.docx", sizeMB: 0.5 },
  { name: "invoice.pdf", sizeMB: 0.3 },
  { name: "report.pdf", sizeMB: 1.5 },
  { name: "notes.txt", sizeMB: 0.1 }
];

const result = files.find(file =>
  file.name.endsWith(".pdf") && file.sizeMB > 1
);

console.log(result); // { name: "report.pdf", sizeMB: 1.5 }
