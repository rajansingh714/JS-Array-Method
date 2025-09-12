const person = {
    name: 'Rajan',
    age: 25
};

// const {name, age} = person;
// console.log(name, age);


// const {name: fullname, age} = person;

// console.log(fullname, age);

const person1 = { name: 'Rajan'};

const { name, age = 18 } = person1;


console.log(name, age);


