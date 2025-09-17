const cities = [
  {
    name: "Delhi",
    population: "74853695",
  },
  {
    name: "Mumbai",
    population: "451278",
  },
  {
    name: "Patna",
    population: "74851246",
  },
  {
    name: "Bhopal",
    population: "4596321",
  },
];

const bigCities = cities.filter((city) => {
  return city.population > 461278;
});

console.log(bigCities);
