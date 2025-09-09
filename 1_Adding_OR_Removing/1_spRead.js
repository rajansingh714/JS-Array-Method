const names = ['krishna', 'radhe', 'jaiShriRam'];
const colors = ['white', 'Red', 'black'];

names.push(...colors);

// Adding element with push  

console.log({names});


// example
const originalArray = [2,3,4,5];
const copyArray = [...originalArray];
console.log("copy array ", {copyArray});

// adding elements to Arrays

const integers = [1,2,3,4,5];

const newIntegersAray = [...integers, 7,8,9];
console.log(newIntegersAray);
console.log(newIntegersAray[6]);


const originalObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

const copyObject =   { ...originalObject } ;
console.log(copyObject);


function sum(a, b, c) {
    return a + b + c;
}

const number = [33,44,55];

const result = sum(...number);
console.log("sum of number", {result});


