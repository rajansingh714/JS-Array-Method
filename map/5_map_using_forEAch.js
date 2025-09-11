const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

/* Output:
Key: a, Value: 1
Key: b, Value: 2
Key: c, Value: 3
*/
