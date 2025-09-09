
const integers = [1, 2, 3, 4, 5];

// Adding Element from Front

const length = integers.unshift(6,7,8);
console.log({length});
console.log({ integers });

// Adding one Array to Another Array

const days = ["Mon", "Tue", "Wed", "Thur", "Frid"];
const weekends = ["Sat", "Sun"];

const weeknd = weekends.unshift("Mon", "Tues", "Wed", "Thur", "Frid");

console.log(weekends);


for(const weeknd of days) {
    console.log(weeknd);
    weekends.unshift(weeknd);
}

console.log(weekends);

// Adding Array using Spread Operator

const names = ["krishna", "radha", "ram"];
const integer = [56, 89, 90];

const lengths = integer.unshift(... names);

console.log({integer});

