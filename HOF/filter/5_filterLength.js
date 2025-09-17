// Filter strings longer than 4 characters
const words = ["map", "filter", "reduce", "javaScript", "fun", "hello"];

const length = words.filter((word) => {
  return word.length > 5;
});

console.log(length);
