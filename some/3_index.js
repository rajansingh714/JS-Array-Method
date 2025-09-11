

// CHECK IF AN ARRAY HAS ONE ELEMENT THAT IS IN RANGE

let marks = [4, 5, 6, 7, 8, 10];

const range = {
    min: 7,
    max: 10
};

const checkRange = marks.some((ele) => {
        return ele >= this.min && ele <= this.max; 
});

console.log( {checkRange } );


