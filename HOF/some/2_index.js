

//  CHECK IF THE AN ELEMENT EXISTS IN THE ARRAY


function exists(val, arr) {

    return arr.some((num) => {
        num === val;
    });
}

let marks = [4, 5, 7, 9, 11, 12];

console.log("value is exist ", exists(4, marks));
console.log("value is not exist ", exists(88, marks));

