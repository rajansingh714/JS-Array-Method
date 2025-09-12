// const config = { width: 100, height: 200};

const x = function fun({ width, height }) {
  console.log(width + height);
};

x({ width: 100, height: 200 });

const data = {
  id: 1,
  tags: ["node", "express", "mongoose"],
};

const {
  id,
  tags: [a, b, c],
} = data;

console.log(id, [a, b, c]);
