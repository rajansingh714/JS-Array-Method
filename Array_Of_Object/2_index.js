let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
];

// Find the product with price > 20000.
const expensiveProducts = products.filter((product) => {
  return product.price > 20000;
});
console.log("Product with expensive Price > 20000", expensiveProducts);

// Increase the price of the Phone by 10%
const increasePrice = products.map((p) => {
  if (p.name === "Phone") {
    // p.name === "Phone" ? { ...p, price: p.price * 1.1 } : p
    return { ...p, price: p.price * 1.1 };
  }
  return p;
});

console.log("increasePrice of phone is ", increasePrice);

// 3. Delete the Tablet object.

products = products.filter((p) => {
  return p.name !== "Tablet";
});

console.log("After deleting Tablet", products);
