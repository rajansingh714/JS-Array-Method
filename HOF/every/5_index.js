const numbers = [2, 4, 7];

const range = {
  min: 0,
  max: 10,
};

const isInRange = (n) => n >= this.min && n <= this.max;

const result = numbers.every(isInRange, range);

console.log({ result });


// Check elelment is positive or negative

const nums = [2, 3, 4, -10];

const checkPositNum = nums.every((n) => {
     return n > 0 
});

console.log( { checkPositNum } );

// CHECK ALL STRINGS HAVE SAME LENGTH

const tags = ['car', 'dog', 'man', 'sun'];

const length = tags[0].length;

const checkLength = tags.every((tag) => {
        return tag.length === length;
});

console.log( {checkLength} );

