const orders = [
  { orderId: 1, amount: 250 },
  { orderId: 2, amount: 450 },
  { orderId: 3, amount: 300 },
];

// 1. Find the total amount.

const totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

console.log("totalAmount ", totalAmount);

let numbersArray = [4, 1, 2, 55, 9];
let maxFromArray = Math.max(...numbersArray);
// console.log(maxFromArray); // Output: 55

// 2. Find the order with the highest amount
const highestAmount = orders.reduce((max, order) => {
  return order.amount > max.amount ? order : max;
});

console.log("Order with highest amount is ", highestAmount);
