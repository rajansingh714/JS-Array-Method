const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 6];

const merged = arr1.concat(arr2);

// remove duplicate
const result = merged.filter((item, index) => {
  //   return merged.indexOf(item) === index;
  const idx = merged.indexOf(item);
  return idx === index;
});

// console.log(result);

// remove duplicate with Set
const resul1 = [...new Set(merged)];
console.log(resul1);
