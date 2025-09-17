const users = [
    {name: 'Rajan', age: 25},
    {name: 'Singh', age: 78},
    {name: 'krishna', age: 100000000}
];

const allAdults = users.every((user) => {
    return user.age >= 18
});

console.log({allAdults});


const passwords = ["abc123", "secure!", "pass123"];

const allSecure = passwords.every(pw => pw.length >= 6 && /[!@#$%^&*]/.test(pw));

console.log(allSecure); // false ("abc123" and "pass123" missing special char)

