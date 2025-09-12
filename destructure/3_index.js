

function start(a, b) {
    return [
        a + b, 
        (a + b) / 2,
        a - b
    ]
}


const [sum, avg, diff] = start(6, 2);
console.log(sum, avg, diff);

