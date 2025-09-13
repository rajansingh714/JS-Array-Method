// Find the first transaction record where:

// amount is divisible by 777,

// user’s location is India (case-insensitive),

// and transaction includes an item that is both digital and refundable.

const transactions = [
  {
    id: 1,
    amount: 1554,
    user: { location: "USA" },
    items: [{ name: "ebook", digital: true, refundable: false }]
  },
  {
    id: 2,
    amount: 777,
    user: { location: "india" },
    items: [{ name: "course", digital: true, refundable: true }]
  },
  {
    id: 3,
    amount: 2331,
    user: { location: "India" },
    items: [{ name: "license", digital: true, refundable: true }]
  }
];

const result = transactions.find(tx =>
  tx.amount % 777 === 0 &&
  tx.user.location.toLowerCase() === "india" &&
  tx.items.some(item => item.digital && item.refundable)
);

console.log(result?.id); // 2 ✅
