// Keep only objects with price < 100

const products = [
  { name: "Book", price: 120 },
  { name: "Pen", price: 50 },
  { name: "Pencil", price: 20 },
];

const checkPrice = products.filter((price) => {
  return price.price < 100;
});

console.log(checkPrice);
