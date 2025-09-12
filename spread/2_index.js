function getScore() {
  return [10, 20, 30, 40, 50];
}

const [x, y, ...args] = getScore();

console.log(x, y);
console.log(args);

function getProfile() {
  return ["rajan", "singh", ["red", "blue", "white"]];
}

const [name, title, [whi]] = getProfile();

console.log(name, title, whi);
