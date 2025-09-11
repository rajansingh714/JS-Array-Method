// Add index with value

const letter = ["a", "b", "c"];

const indexed = letter.map((cha, idx) => {
  return `${idx}-${cha}`;
});

console.log(indexed);
