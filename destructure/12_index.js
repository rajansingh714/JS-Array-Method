
// Destructure With Rest Operator in Function

const user = {
    name: 'rajan',
    age: 27,
    country: 'India',
    profession: 'Developer'
};

function userInfo({ name, ...res }) {
        console.log("Name:", name);
        console.log("rest:", res);
}

userInfo(user);

