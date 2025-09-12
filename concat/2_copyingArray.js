const colors = ["red", "green", "blue"];

// when you want to you copy an array from original array then only concat not pass parameter in concat
const rgb = colors.concat();
console.log(rgb);

const addColors = colors.concat("black", "white", "magento");
console.log(addColors);
