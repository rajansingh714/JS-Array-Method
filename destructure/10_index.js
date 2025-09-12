const user = {
    name: 'Rajan',
    age: 25,
    country: 'India'
};

function fun({ name, country }) {
    console.log(`Hello ${name} from ${country}`);
}

fun(user);


// Examples With default Values

function greet({ name = "Krishna", Home = "vrindavan" }) {
    console.log(`i am ${ name } From ${Home}`);
}

greet({});

