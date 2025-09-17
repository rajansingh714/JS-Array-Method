const orders = [
  { id: 1, product: "Laptop", amount: 50000 },
  { id: 2, product: "Phone", amount: 20000 },
  { id: 3, product: "Tablet", amount: 15000 },
  { id: 4, product: "Headphones", amount: 5000 },
];

// Total revenue from only expensive orders (> 15000)
const totalExpensiveRevenue = orders
  .filter((order) => order.amount > 15000)
  .reduce((sum, order) => {
    return sum + order.amount;
  }, 0);

console.log("totalExpensive ", totalExpensiveRevenue);
