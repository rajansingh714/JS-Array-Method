// Extract of email, twitter, or checked linkedin to linkedInuser

const user = {
  name: "Rajan",
  profile: {
    contact: {
      email: "rajanSingh@gmail.com",
      phone: "1234567",
    },
    social: {
      twitter: "@rajanSingh",
      linkedin: "rajan-link",
    },
  },
};

const {
  profile: {
    contact: { email },
    social: { twitter, linkedin: linkedInUser },
  },
} = user;

console.log(email, twitter, linkedInUser);

// extract id of the array of 2nd obj

const response = {
  status: "sccess",
  data: [
    { id: 1, value: "one" },
    { id: 2, valuee: "two" },
  ],
};

const {
  data: [, { id }],
} = response;

console.log(id);

// Destructure cpu, gpu (default: "integrated"), and rename cpu to processor.

const product = {
  name: "Laptop",
  speci: {
    cpu: "i7",
    // gpu is missing
  },
};

const {
  speci: { cpu: processor, gpu = "integrated" },
} = product;

console.log(processor, gpu);
