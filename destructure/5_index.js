const user = {
  id: 1,
  details: {
    firstName: "Rajan",
    lastName: "Singh",
  },
};

const { details } = user;
console.log(details);

// destructure city and country from object
const user1 = {
  name: "Rajan",
  address: {
    city: "Bihar",
    country: "India",
  },
};

const {
  address: { city, country },
} = user1;

console.log(city, country);
