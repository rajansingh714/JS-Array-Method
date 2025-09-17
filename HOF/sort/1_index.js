
// let numbers = [78, 2, 34, 99, 22 , 3];

// console.log("sorting the number", numbers.sort());

// Above code is not Working

// sort() = method used to sort elements of an array in place.
// sort elements as string in lexicographic order, not alphabetical

// lexicographic = (alphabet + numbers + symbols) as strings

const integers = [6, 2, 5];

const sortIntegers = integers.sort((a, b) => {
    return a - b; // sorting in increasing order
});

console.log("Sorting in increasing order", {sortIntegers});

const numbers = [45, 23,  99, 12, 23];

const sortNumbers = numbers.sort((a, b) => {
        return b - a; // sorting in DECREASINg order
});


console.log('sorting in Decreasing Order', sortNumbers);

