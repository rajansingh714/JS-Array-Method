const integers = [2, 3, 455, 22, 89];

// splice method it Change the Original Array

const deleteInteger = integers.splice(1, 3);

console.log({ deleteInteger });
console.log({ integers });

const names = ["krishna", "rajan", "prince", "jaiShreeRam", "pavitra"];

const namesSplice = names.splice(1, 0, "singh");

console.log({ names });

// when i want to not delete element

const colors = ["red", "yellow", "green", "blue"];

const NotRemoveColor = colors.splice(2, 0, "white", "pinkBlue");
console.log("color ", { NotRemoveColor });

const petName = ["dog", "cat", "parrot"];
