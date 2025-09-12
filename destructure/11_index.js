

// Destructure Inside Function Body


function displayInfo(user) {
    const {name, profession} = user;
    console.log(` i am ${ name } profession ${ profession }`);   
}


displayInfo({ name: 'Rajan', profession: 'teacher' });


// Destructure array in function parameter

function sum([a, b]) {
    return a + b;
}

console.log(sum([20, 25]));

// Basic Object Desturcture in Function Parameter


const user = {
    name: 'Rajan',
    age: 28
};

function printName({ name }) {
    console.log(name)
}

printName(user);

// Destructure Nested Object in Function Parameter

const userInfo ={
    name: 'Rajan',
    age: 28,
    city: {
        hometown: 'sitamarhi',
        picode: 843320
    }
};

function userCity({ city: { hometown } }) {
    console.log(`my HomeTown is ${hometown}`);
}

userCity(userInfo);


