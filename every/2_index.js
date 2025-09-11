const nullArray = [].every((n) => n < 0);
console.log({ nullArray });

const nums = [0, 1, 2, 3, 4];

const allMatchIndex = nums.every((num, idx) => num === idx);

console.log({ allMatchIndex });

const oddNum = [5, 7, 9, 33, 13];
const resultoddNum = oddNum.every((n) => {
  return n % 2 === 0;
});

console.log({ resultoddNum });
