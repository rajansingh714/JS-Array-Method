
// All Words Start with UPPERCASE

const names = ['Rajan', 'Singh', 'Krishna', 'Prience'];

const allCapital = names.every((n) => {
    return  n[0] === n[0].toUpperCase();
});

console.log( { allCapital } );

// USER VERIFIED

const users = [
    {name: 'Rajan', verified: true},
    {name: 'Prience', verified: true},
    {name: 'priyanshu', verified: false}
]

const checkVerified = users.every((user) => {
    return users.verified;
});

console.log( {checkVerified} );

// Check All String are empty or Not

const fruites = ['Apple', 'Orange', 'Mango', 'Banana'];

const checkEmptyString = fruites.every((fruit) => {
    return fruit.length > 0;
});

console.log( {checkEmptyString} );

// Check All items are Active (Nested Property)

const items = [
    {   id: 1, 
        meta: {
            active: true
        }
    },
    {
        id: 2,
        meta: {
            active: true
        }
    },
    {
        id: 3,
        meta: {
            active: true
        }
    }
];

const activeItem = items.every((item) => {
    return item.meta.active;
});

console.log( {activeItem} );

