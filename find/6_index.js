// Find the first user who placed an order with a product that costs more than ₹10000 and is out of warranty


const users = [
  {
    name: "Ravi",
    orders: [
      {
        id: 1,
        products: [
          { name: "Laptop", price: 45000, warranty: false },
          { name: "Mouse", price: 500, warranty: true }
        ]
      }
    ]
  },
  {
    name: "Suman",
    orders: [
      {
        id: 2,
        products: [
          { name: "Phone", price: 12000, warranty: false },
          { name: "Charger", price: 500, warranty: false }
        ]
      }
    ]
  },
  {
    name: "Kabir",
    orders: []
  }
];

const result = users.find(user =>
  user.orders?.some(order =>
    order.products?.some(product => product.price > 10000 && !product.warranty)
  )
);

console.log(result); // Suman
