const arr1 = [3, 1];
const arr2 = [90, 10];

const mergerd = arr1.concat(arr2);

const sortArray = mergerd.sort((a, b) => {
  return a - b;
});

console.log(sortArray);
