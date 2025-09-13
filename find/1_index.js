// . Find the next upcoming event after today

const events = [
  { name: "Hackathon", date: "2024-12-10" },
  { name: "Workshop", date: "2025-06-10" },
  { name: "Webinar", date: "2025-06-20" }
];

const today = new Date("2025-06-08");

const result = events.find(event => new Date(event.date) > today);
console.log(result); // { name: "Workshop", date: "2025-06-10" }



//  Find first product that is low in stock and has a discount


const products = [
  { id: 1, name: "Laptop", stock: 50, discount: 0 },
  { id: 2, name: "Headphones", stock: 4, discount: 10 },
  { id: 3, name: "Mouse", stock: 2, discount: 0 },
];

const result1 = products.find(p => p.stock < 5 && p.discount > 0);
console.log(result1); // { id: 2, name: "Headphones", stock: 4, discount: 10 }
